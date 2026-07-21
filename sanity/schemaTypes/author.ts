export default {
  name: 'author',
  title: 'Tác giả',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Họ tên',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Ảnh đại diện',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'bio',
      title: 'Tiểu sử',
      type: 'text',
    },
  ],
}