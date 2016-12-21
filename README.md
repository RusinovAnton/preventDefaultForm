# PreventDefaultForm
React component that helps you to preventDefault on form submit

## Installation
`npm install --save prevent-default-form`  
or  
`yarn add prevent-default-form`  

## Usage
Voila! :cherry_blossom:
```javascript
import PreventDefaultForm from 'prevent-default-form'

class MyWonderfulFormComponent extends Component {
    render() {
        return (
          <PreventDefaultForm onSubmit={ this._submitMyForm }>
            <input type='email' name='email'/>
            <input type='password' name='password'/> 
          </PreventDefaultForm>
        )
    }
}
```

## License
See [LICENSE.md](https://github.com/RusinovAnton/preventDefaultForm/blob/master/LICENSE.md)
