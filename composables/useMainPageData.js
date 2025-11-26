export const useMainPageData = async () => {
  // Используем useFetch напрямую с автоматической дедупликацией
  const apiUrl = 'https://admin.spinnempire.com/wp-content/themes/api/app/'
  // const apiUrl = 'https://seo.dev-site.site/wp-content/themes/api/app/'

  const { data, error } = await useFetch(apiUrl, {
    key: 'main',
    method: 'POST',
    body: {
      type: 'pages',
      url: 'main'
    },
    headers: {
      'Content-Type': 'application/json'
    },
    // Дедупликация запросов с одинаковым ключом
    dedupe: 'defer'
  })

  if (error.value) {
    console.error('Ошибка при получении данных:', error.value)
  }

  return {
    data
  }
}

