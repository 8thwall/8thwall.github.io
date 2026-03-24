import React from 'react'

// @ts-ignore
import CodeBlock from '@theme/CodeBlock'
// @ts-ignore
import Heading from '@theme/Heading'

function isCodeLiteral(str: string) {
  // matches things like ecs.Foo.Bar or MyEnum.VALUE
  return /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*)+$/.test(str)
}

function formatProperties(obj: any, indent = 1) {
  const nextIndent = ' '.repeat(indent + 1)
  const prevIndentStr = ' '.repeat(Math.max(indent - 2, 0))

  if (Array.isArray(obj)) {
    const items = obj
      .map(item => formatProperties(item, indent + 2))
      .join(`,\n${nextIndent}`)
    return `[\n${nextIndent}${items}\n${prevIndentStr}]`
  } else if (typeof obj === 'object' && obj !== null) {
    const entries = Object.entries(obj)
      .map(([key, value]) => `${nextIndent}${key}: ${formatProperties(value, indent + 2)}`)
      .join(',\n')
    return `{\n${entries}\n${prevIndentStr}}`
  } else if (typeof obj === 'string') {
    // if it looks like code, return raw; otherwise quote
    return isCodeLiteral(obj) ? obj : `'${obj.replace(/'/g, "\\'")}'`
  } else {
    return String(obj)
  }
}

const ComponentFunctions = (props: any) => {
  const {name, properties, mutate, showExamples = true} = props
  const propertiesString = properties && Object.keys(properties).length > 0
    ? formatProperties(properties)
    : '{}'
  const defaultMutateFunction = 'cursor.width += 1; return false;'
  const mutateFunctionCode = mutate || defaultMutateFunction

  return (
    <>
      <Heading as='h3' id='get'>Get</Heading>

      <p>Returns a read-only reference.</p>

      {showExamples && (
        <>
          <Heading as='h4'>Example</Heading>
          <CodeBlock language='tsx'>
            {`ecs.${name}.get(world, component.eid)`}
          </CodeBlock>
        </>
      )}

      <Heading as='h3' id='set'>Set</Heading>

      <p>
        Ensures the component exists on the entity, then assigns the (optional)
        data to the component.
      </p>

      {showExamples && (
        <>
          <Heading as='h4'>Example</Heading>
          <CodeBlock language='tsx'>
            {`ecs.${name}.set(world, component.eid, ${propertiesString})`}
          </CodeBlock>
        </>
      )}

      <Heading as='h3' id='mutate'>Mutate</Heading>

      <p>
        Perform an update to the component within a callback function. Return{' '}
        <code>true</code> to indicate no changes made.
      </p>

      {showExamples && (
        <>
          <Heading as='h4'>Example</Heading>
          <CodeBlock language='tsx'>
            {`ecs.${name}.mutate(world, component.eid, (cursor) => {
  ${mutateFunctionCode}
})`}
          </CodeBlock>
        </>
      )}

      <Heading as='h3' id='remove'>Remove</Heading>

      <p>Removes the component from the entity.</p>

      {showExamples && (
        <>
          <Heading as='h4'>Example</Heading>
          <CodeBlock language='tsx'>
            {`ecs.${name}.remove(world, component.eid)`}
          </CodeBlock>
        </>
      )}

      <Heading as='h3' id='has'>Has</Heading>

      <p>
        Returns <code>true</code> if the component is present on the entity.
      </p>

      {showExamples && (
        <>
          <Heading as='h4'>Example</Heading>
          <CodeBlock language='tsx'>
            {`ecs.${name}.has(world, component.eid)`}
          </CodeBlock>
        </>
      )}

      <Heading as='h3' id='reset'>Reset</Heading>

      <p>Adds, or resets the component to its default state.</p>

      {showExamples && (
        <>
          <Heading as='h4'>Example</Heading>
          <CodeBlock language='tsx'>
            {`ecs.${name}.reset(world, component.eid)`}
          </CodeBlock>
        </>
      )}

      <Heading as='h3' id='advanced-functions'>Advanced Functions</Heading>

      <Heading as='h4' id='cursor'>Cursor</Heading>

      <p>
        Returns a mutable reference. Cursors are reused so only one cursor for
        each component can exist at a time.
      </p>

      {showExamples && (
        <>
          <Heading as='h5'>Example</Heading>
          <CodeBlock language='tsx'>
            {`ecs.${name}.cursor(world, component.eid)`}
          </CodeBlock>
        </>
      )}

      <Heading as='h4' id='acquire'>Acquire</Heading>

      <p>
        Same behavior as cursor, but commit must be called after the cursor is
        done being used.
      </p>

      {showExamples && (
        <>
          <Heading as='h5'>Example</Heading>
          <CodeBlock language='tsx'>
            {`ecs.${name}.acquire(world, component.eid)`}
          </CodeBlock>
        </>
      )}

      <Heading as='h4' id='commit'>Commit</Heading>

      <p>
        Called after acquire. An optional third argument determines whether the
        cursor was mutated or not.
      </p>

      {showExamples && (
        <>
          <Heading as='h5'>Example</Heading>
          <CodeBlock language='tsx'>
            {`ecs.${name}.commit(world, component.eid)
ecs.${name}.commit(world, component.eid, false)`}
          </CodeBlock>
        </>
      )}

      <Heading as='h4' id='dirty'>Dirty</Heading>

      <p>
        Mark the entity as having been mutated. Only needed in a specific case
        where systems are mutating data.
      </p>

      {showExamples && (
        <>
          <Heading as='h5'>Example</Heading>
          <CodeBlock language='tsx'>
            {`ecs.${name}.dirty(world, component.eid)`}
          </CodeBlock>
        </>
      )}
    </>
  )
}

export default ComponentFunctions
