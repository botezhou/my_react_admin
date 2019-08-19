// 导航栏伸缩控制
export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';
export const TOGGLE_THEMECOLOR = 'TOGGLE_THEMECOLOR';
export const TOGGLE_FIXEDHEAD = 'TOGGLE_FIXEDHEAD';
export const TOGGLE_ISBOX = 'TOGGLE_ISBOX';
export function toggleCollapsed(data) {
    return {
      type: TOGGLE_COLLAPSED,
      data: data
    }
}
export function toggleThemeColor(data) {
  return {
    type: TOGGLE_THEMECOLOR,
    data: data
  }
}
export function toggleFixedHead(data) {
  return {
    type: TOGGLE_FIXEDHEAD,
    data: data
  }
}
export function toggleIsBox(data) {
  return {
    type: TOGGLE_ISBOX,
    data: data
  }
}