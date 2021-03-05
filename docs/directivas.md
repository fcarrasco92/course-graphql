## queries with directives

## directives @include @skip

```
query getPeopleData($monitor: Boolean!, $avatar: Boolean!){
    getPeople {
      _id
      name
      ... on Monitor @include(if: $monitor) {
        phone
      }
            ... on Student @include(if: $avatar) {
        avatar
        email
      }
    }
  }
```

## VARIABLES

{
"monitor": false,
"avatar": true
}
