import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Network section
      S.listItem()
        .title('Network')
        .child(
          S.list()
            .title('Network')
            .items([
              S.documentTypeListItem('memberOrg').title('Member Organizations'),
              S.documentTypeListItem('movementWin').title('Movement Wins'),
            ]),
        ),

      S.divider(),

      // Blog section
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ]),
        ),
    ])
