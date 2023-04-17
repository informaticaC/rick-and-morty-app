import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [state, setState] = useState()
    const [hasError, setHasError] = useState()

    useEffect(()=> {
        axios.get(url)
            .then(res => {
              setState(res.data)
              setHasError(false)
            })
            .catch(err => {
              console.log(err)
              setHasError(true)
            })
    }, [url])

  return (
    [state, hasError]
  )
}

export default useFetch