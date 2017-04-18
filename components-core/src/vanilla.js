import { Button } from './button/button-vanilla';
import { RadioButton } from './radio-button/radio-button-vanilla';

function start() {
    for(var i = 0; i < 5; i++) {
        let btn = new Button({
            text: 'Button ' + i,
            onClick: () => { 
                btn.setProps({ text: 'Clicked' });
            }
        });
        btn.render(document.body);
    }

    let group = new RadioButton({
        buttons: ['Button 1', 'Button 2'],
        onSelectedIndexChanged: (args) => { 
            //alert(args.selectedIndex);
        }
    });
    group.render(document.body);
}

document.addEventListener('DOMContentLoaded', start, false);
