interface User {
  id: number
  name: string
  email: string
  password: string
  created_at: string
  updated_at: string
}
type Permission = {
  action: string
  controller: string
}
