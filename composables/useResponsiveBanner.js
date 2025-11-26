import { computed } from 'vue'

/**
 * Возвращает ссылки на баннеры для разных устройств.
 * resolveSources -> { desktopBlock, laptopBlock, mobileBlock, fallback }.
 * У каждого блока (десктоп/планшет/мобайл) есть fullSettings[0].
 */
export const useResponsiveBanner = (resolveSources, options = {}) => {
  const fallbackImage = options.fallback || ''

  const sources = computed(() => {
    const resolved = (typeof resolveSources === 'function' ? resolveSources() : {}) || {}
    const desktopBlock = resolved.desktopBlock || {}
    const laptopBlock = resolved.laptopBlock || {}
    const mobileBlock = resolved.mobileBlock || {}
    const fallback = resolved.fallback || fallbackImage

    return {
      desktop: desktopBlock.fullSettings?.[0] || fallback,
      tablet: laptopBlock.fullSettings?.[0] || fallback,
      mobile: mobileBlock.fullSettings?.[0] || fallback,
      fallback
    }
  })

  const defaultSrc = computed(() => {
    const { desktop, tablet, mobile, fallback } = sources.value
    return desktop || tablet || mobile || fallback
  })

  return {
    sources,
    defaultSrc
  }
}

