export const useWordpressApi = () => {
  const apiUrl = 'https://admin.spinnempire.com/wp-content/themes/api/app/pages/'

  const fetchPageData = async (type, url) => {
    try {
      const response = await $fetch(apiUrl, {
        method: 'POST',
        body: {
          type: type,
          url: url
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      if (response.confirm === 'ok') {
        return response
      } else {
        throw new Error('API вернул ошибку: ' + (response.confirm || 'unknown'))
      }
    } catch (error) {
      console.error('Ошибка при получении данных из WordPress:', error)
      throw error
    }
  }

  const fetchMainPage = async () => {
    return await fetchPageData('pages', 'main')
  }

  return {
    fetchPageData,
    fetchMainPage
  }
}

