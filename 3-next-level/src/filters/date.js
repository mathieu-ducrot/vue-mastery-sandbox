/* Some argue that filters should be used instead of methods when you’re exclusively using that functionality in your
 * templates and nowhere else. Others argue that you should always use a method instead, or a computed property when
 * appropriate since its value will be cached and its a more performant option. */

export default value => {
  const date = new Date(value)
  return date.toLocaleString(['fr-FR'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  })
}
