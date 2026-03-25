import React, {useRef, useState} from 'react'
// @ts-ignore – Docusaurus code styling
import CodeBlock from '@theme/CodeBlock'

type Mode = 'onEvent' | 'listen' | 'addEventListener'

type EventExampleProps = {
  ns: string
  event: string
  initialStateName?: string
  nextStateName?: string
  target?: string
  hasPayload?: boolean
  callbackBody?: string | string[]
}

const TOGGLE_LABEL_ON = 'Hide Context'
const TOGGLE_LABEL_OFF = 'Show Context'

const TABS: ReadonlyArray<{ value: Mode; label: string }> = [
  {value: 'listen', label: '.listen'},
  {value: 'onEvent', label: '.onEvent'},
  {value: 'addEventListener', label: '.addEventListener'},
]

const wrapFull = (inner: string) => (`import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'my-component',
  stateMachine: ({defineState, eid, world}) => {
${inner}
  },
})`)

const KEY = {
  Left: 'ArrowLeft',
  Right: 'ArrowRight',
  Enter: 'Enter',
  Space: ' ',
}

const EventExample = ({
  ns,
  event,
  initialStateName = 'initial-state',
  nextStateName = 'next-state',
  target = 'eid',
  hasPayload = true,
  callbackBody,
}: EventExampleProps) => {
  const [showFull, setShowFull] = useState(false)
  const [active, setActive] = useState<Mode>(TABS[0].value)

  const tabRefs = useRef<Array<HTMLLIElement | null>>([])

  const snippetFor = (): string => {
    const eventConst = ns ? `${ns}.${event}` : event
    const contextSpacing = showFull ? '    ' : ''
    const eventArgName = 'event'

    let callbackLines: string[]
    if (Array.isArray(callbackBody)) {
      callbackLines = callbackBody
    } else if (typeof callbackBody === 'string') {
      callbackLines = [callbackBody]
    } else if (hasPayload) {
      callbackLines = [`console.log('${event}', ${eventArgName}.data)`]
    } else {
      callbackLines = [`console.log('${event}')`]
    }

    const cbParam = hasPayload ? `(${eventArgName})` : '()'

    switch (active) {
      case 'onEvent': {
        const hasCustomTarget = target && target !== 'eid'
        const optionsArg = hasCustomTarget ? `, {target: ${target}}` : ''
        const oneline = `\
${contextSpacing}defineState('${initialStateName}')\
.initial().onEvent(${eventConst}, '${nextStateName}'${optionsArg})`
        return showFull ? wrapFull(oneline) : oneline
      }
      case 'listen': {
        const effectiveCallbackBody = callbackLines.map(e => `${contextSpacing}  ${e}`).join('\n')
        const oneline = `\
${contextSpacing}defineState('${initialStateName}')\
.initial().listen(${target}, ${eventConst}, ${cbParam} => {
${effectiveCallbackBody}
${contextSpacing}})`
        return showFull ? wrapFull(oneline) : oneline
      }
      case 'addEventListener': {
        return `\
const handle = ${cbParam} => {
${callbackLines.map(e => `  ${e}`).join('\n')}
}

world.events.addListener(${target}, ${eventConst}, handle)

// Always remove listeners in cleanup
world.events.removeListener(${target}, ${eventConst}, handle)`
      }
      default:
        return ''
    }
  }

  const focusTabAt = (idx: number) => {
    const el = tabRefs.current[idx]
    if (el) el.focus()
  }

  const onTabKeyDown = (
    e: React.KeyboardEvent,
    idx: number,
    value: Mode
  ) => {
    const last = TABS.length - 1
    switch (e.key) {
      case KEY.Left:
        e.preventDefault()
        focusTabAt(idx === 0 ? last : idx - 1)
        break
      case KEY.Right:
        e.preventDefault()
        focusTabAt(idx === last ? 0 : idx + 1)
        break
      case KEY.Enter:
      case KEY.Space:
        e.preventDefault()
        setActive(value)
        break
      default:
        break
    }
  }

  const showToggle = active !== 'addEventListener'

  return (
    <div className='eventExample'>
      <div className='eventExample__header'>
        <ul
          className='tabs__list'
          role='tablist'
          aria-orientation='horizontal'
        >
          {TABS.map((t, i) => {
            const tabId = `eventExample-tab-${t.value}`
            const panelId = `eventExample-panel-${t.value}`
            const selected = active === t.value
            return (
              <li
                key={t.value}
                id={tabId}
                role='tab'
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                className={`tabs__item ${selected ? 'tabs__item--active' : ''}`}
                onClick={() => setActive(t.value)}
                onKeyDown={e => onTabKeyDown(e, i, t.value)}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
              >
                {t.label}
              </li>
            )
          })}
        </ul>

        {showToggle && (
          <button
            type='button'
            className='eventExample__toggle'
            onClick={() => setShowFull(v => !v)}
            aria-pressed={showFull}
          >
            {showFull ? TOGGLE_LABEL_ON : TOGGLE_LABEL_OFF}
          </button>
        )}
      </div>

      <div
        className='eventExample__panel'
        id={`eventExample-panel-${active}`}
        role='tabpanel'
        aria-labelledby={`eventExample-tab-${active}`}
      >
        <CodeBlock language='tsx'>{snippetFor()}</CodeBlock>
      </div>
    </div>
  )
}

export {EventExample}
