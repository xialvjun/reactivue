import { UnwrapRef } from '@vue/reactivity'
import { useSetup } from './useSetup'

export function defineComponent<PropsType, State=any>(
  setupFunction: (props: PropsType) => State | () => JSX.Element,
  renderFunction?: (state: UnwrapRef<State>) => JSX.Element,
): (props: PropsType) => JSX.Element {
  return (props: PropsType) => {
    const stateOrRender = useSetup(setupFunction, props)
    return renderFunction ? renderFunction(stateOrRender) : stateOrRender()
  }
}
