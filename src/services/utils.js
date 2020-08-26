const urlParams = new URLSearchParams(window.location.search)

export function getQueryParam(name) {
  return urlParams.get(name)
}
