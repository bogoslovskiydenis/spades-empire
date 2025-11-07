export const useWordpressApi = () => {
  const apiUrl = 'https://seo.dev-site.site/wp-content/themes/api/app/'

  const fetchPageData = async (type, url) => {
    try {
      const response = await $fetch(apiUrl, {
        method: 'POST',
        body: {
          type,
          url
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

  const fetchBonusesPage = async () => {
    return await fetchPageData('pages', 'bonuses')
  }

  const fetchCasinoPage = async () => {
    return await fetchPageData('pages', 'casino')
  }

  const fetchContactPage = async () => {
    return await fetchPageData('pages', 'contact-us')
  }

  const fetchResponsibleGamingPage = async () => {
    return await fetchPageData('pages', 'responsible-gaming')
  }

  return {
    fetchPageData,
    fetchMainPage,
    fetchBonusesPage,
    fetchCasinoPage,
    fetchContactPage,
    fetchResponsibleGamingPage
  }
}

