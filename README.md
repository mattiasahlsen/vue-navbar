## Navbar component for Vue
Demo: https://mattiasahlsen.github.io/vue-navbar

<div align="center">
  <img src="assets/preview.png">
</div>

#### Install and import
`npm install vue-navbar-component` or `yarn add vue-navbar-component`

```
<script>
import Navbar from 'vue-navbar-component'
...

export default {
...
  components: {
    ...
    Navbar,
  }
...
}
</script>
```

#### Usage (with vue-router)
```vue
<template>
  ...
  <Navbar
    class="navbar"
    :logo="logo"
    :links="links"
    :darkBackground="true"
    onHover="slide"

    logoTextClass="logo-text"
    logoImgClass="logo-img"
    linkClass="navbar-link"
    dropdownBackgroundColor="rgba(0, 0, 0, 0.4)"
  />
  ...
</template>

<script>
  ...
    data() {
      return {
        logo: {
          img: require('./assets/logo.png')
        },
        links: [
          {
            name: 'Store',
            click: () => this.$router.push('/store'),
          },
          {
            name: 'Gallery',
            click: () => this.$router.push('/gallery'),
          },
          {
            name: 'About',
            dropdown: [
              {
                name: 'Our story',
                click: () => this.$router.push('/our-story')
              },
              {
                name: 'Contact',
                click: () => this.$router.push('/our-story')
              },
            ]
          },
        ]
      }
    }
  ...
</script>
```

#### Props and event handlers


| Name           | Type    | Default       | Description | Required |
| ---            | ---     | ---           | ---         | ---
| logo           | Logo  | {}        | Logo img and text. | false |
| links  | Link[]  | [] | The links to the right of the navbar. | false |
| darkBackground  | Boolean  | true | If the background of the navbar is dark. darkBackground: true will result in light text. | false |
| onHover  | HoverOption  | 'slide' | Hover effects for the links. | false |
| logoTextClass | String/Array/Object  | undefined | Classes that will be applied to the logo text. Same syntax as :class in vue. | false |
| logoImgClass | String/Array/Object  | undefined | Classes that will be applied to the logo img tag. Same syntax as :class in vue. | false |
| linkClass | String/Array/Object  | undefined | Classes that will be applied to every navbar link. Same syntax as :class in vue. | false |
| dropdownBackgroundColor  | String  | #262626 if darkBackground: true, else #fefefe | Background color of the dropdowns. | false |

#### Types (as defined by typescript syntax)

```typescript
type HoverOption = 'slide' | 'fade' | 'slide-underline' | 'fade-underline'

interface Logo {
  img: String; // the path to the logo image, example: require('./assets/logo.png')
  text: String; // text that will be shown instead of the image, or to the right of the image if used together
}

interface Link {
  name: String; // name shown in navbar
  click: Function; // click handler
  dropdown: Array<DropdownLink>; // dropdown
}
// same as Link, but can not have dropdown (can't have nested dropdowns)
interface DropdownLink {
  name: String; // name shown in navbar
  click: Function; // click handler
}
```
