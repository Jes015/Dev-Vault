const helpHttps = () => {
    const http = async (url: string, options: RequestInit) => {
      const abortController = new AbortController()
      options.signal = abortController.signal
      setTimeout(() => {
        abortController.abort()
      }, 5000)
  
      const optionsRequest: Request = options as Request
      optionsRequest.headers.append('Content-Type', 'application/json')
  
      return await fetch(url, optionsRequest)
        .then(async (res) => await res.json())
        .then(res => res)
        .catch(err => err)
    }
  
    const get = async (url: string, masterKey: string) => {
      const newHeaders = new Headers()
      newHeaders.append('X-Master-Key', masterKey)
  
      const method = 'GET'
      return await http(url, { headers: newHeaders, method })
    }
  
    const post = async (url: string, masterKey: string) => {
      const newHeaders = new Headers()
      newHeaders.append('X-Master-Key', masterKey)
  
      const method = 'POST'
      return await http(url, { headers: newHeaders, method, body: JSON.stringify({}) })
    }
  
    return { get, post }
  }
  
  export default helpHttps
  