# PreventDefaultForm
React component that helps you to preventDefault on form submit

## Usage
Voila!
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