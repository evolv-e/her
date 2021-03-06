'use strict';

export default async (state) => {
  const intents = state.intents.map( intent => intent.script(state, intent.actions) );
  return await Promise.all(intents);
}
