const sleep = ms => new Promise(resolve=>setTimeout(resolve,ms))

const asyncValidate = values=>{

    return sleep(1000).then(()=>{
        // eslint-disable-next-line no-throw-literal
    })
}

export default asyncValidate;