export const fetchData = async (path: string, method?: string) => {
    try {
        const response = await fetch(path, {
            method: method || 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            // ...(formData && {
            //     body: JSON.stringify(formData, function (key, val) {
            //         if (val != null && typeof val == 'object') {
            //             if (seen.indexOf(val) >= 0) {
            //                 return
            //             }
            //             seen.push(val)
            //         }
            //         return val
            //     }),
            // }),
        })

        console.log('response', response)

        if (!response.ok) {
            throw response
        }

        const data = (await response.json()) as any
        console.log('data', data)

        if (!data) {
            return []
        }
        return data
    } catch (err) {
        throw err
    }
}
