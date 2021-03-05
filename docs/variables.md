# Queries creadas con Variables.

## QUERY

```
query getCourseById ($course: ID!){
  getCourse(id: $course){
    _id
    title
    people{
      _id
      name
    }
  }
}

```

## QUERY VARIABLES

```
{
  "course": "60405d9b53b29c53a72b3c65"
}
```

## MUTATION

```
mutation AddPersonToCourseNode ($course: ID!, $person: ID!){
  addPeople(courseID: $course, personID: $person){
    _id
    title
  }
}
```

## QUERY VARIABLES

```
{
  "course": "60405d9b53b29c53a72b3c65",
  "person": "60417f3dc8d73312747636e9"
}
```
