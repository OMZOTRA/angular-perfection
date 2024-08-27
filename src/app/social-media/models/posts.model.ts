export class PostsModel {
  id!: number
  userId!: number
  title!: string
  createdDate!: string
  content!: string
  comments!: Comment[]
}
