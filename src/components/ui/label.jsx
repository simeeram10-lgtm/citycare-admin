export function Label({ children, className = '', ...props }) {
  return <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500 ${className}`} {...props}>{children}</label>
}
