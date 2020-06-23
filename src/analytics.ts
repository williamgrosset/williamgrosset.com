export function tabClicked(tab: string): void {
  window.analytics.track('Tab Clicked', {
    tab
  })
}

export function linkClicked(link: string): void {
  window.analytics.track('Link Clicked', {
    link
  })
}

export function socialClicked(social: string): void {
  window.analytics.track('Social Clicked', {
    social
  })
}

export function projectSelected(project: string): void {
  window.analytics.track('Project Selected', {
    project
  })
}

export function projectViewed(project: string): void {
  window.analytics.track('Project Viewed', {
    project
  })
}
