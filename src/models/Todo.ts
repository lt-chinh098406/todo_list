interface Property {
  id: string
  value: string
}

export interface Todo {
  id: string
  title: string
  description: string
  properties: Property[]
  statusId: number
  // creator: string
}