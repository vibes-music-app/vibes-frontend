import { 
  generatePrivateKey, 
  getPublicKey,
  validateEvent,
  verifySignature,
  getSignature,
  getEventHash,
  relayInit, 
  finishEvent
} from 'nostr-tools';

const genKeys = () => {
  let sk = generatePrivateKey()
  let pk = getPublicKey(sk)

  return { sk, pk }
}

const genEvent = (post_text:String, user:String, private_key:String) => {
  console.log('post_text', post_text)
  console.log('user', user)
  let event = {
    kind: 1,
    pubkey: user,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: post_text
  }

  event.id = getEventHash(event)
  event.sig = getSignature(event, private_key)

  let ok = validateEvent(event)
  console.log('okay', ok)
  let veryOk = verifySignature(event)
  console.log('veryok', veryOk)

  if ( ok ) {
    return finishEvent(event, private_key)
  } else {
    return -1
  }
}

export {
  genKeys,
  genEvent
}


