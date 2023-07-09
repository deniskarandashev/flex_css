// container
let display = 'block';
let flexDirection = 'row';
let justifyContent = 'start';
let alignItems = 'stretch';

// item
let alignSelf = 'stretch';
let order = 0;
let marginLeft = 0;
let marginTop = 0;

function calcStyle() {
    // container
    document.querySelector('#input_dispaly_fieldset').addEventListener('click', (d) => {
        display = d.target.value;
        setStyle('display');
    });

    document.querySelector('#input_flex-direction_fieldset').addEventListener('click', (d) => {
        flexDirection = d.target.value;
        setStyle('flexDirection');
    });

    document.querySelector('#input_justify-content_fieldset').addEventListener('click', (d) => {
        justifyContent = d.target.value;
        setStyle('justifyContent');
    });

    document.querySelector('#input_align-items_fieldset').addEventListener('click', (d) => {
        alignItems = d.target.value;
        setStyle('alignItems');
    });

    // item
    document.querySelector('#input_align-self_fieldset').addEventListener('click', (d) => {
        alignSelf = d.target.value;
        setStyle('alignSelf');
    });

    document.querySelector('#input_order_fieldset').addEventListener('click', (d) => {
        order = d.target.value;
        setStyle('order');
    });

    document.querySelector('#input_margin-left_fieldset').addEventListener('click', (d) => {
        marginLeft = d.target.value;
        setStyle('marginLeft');
    });

    document.querySelector('#input_margin-top_fieldset').addEventListener('click', (d) => {
        marginTop = d.target.value;
        setStyle('marginTop');
    });
}

function setStyle(attribute) {
    const containerView = document.querySelector('.container_view');
    const itemView = document.querySelector('.div2');
    switch (attribute) {
        case 'display':
            containerView.style.display = display;
            break;
        case 'flexDirection':
            containerView.style.flexDirection = flexDirection;
            break;
        case 'justifyContent':
            containerView.style.justifyContent = justifyContent;
            break;
        case 'alignItems':
            containerView.style.alignItems = alignItems;
            break;
        case 'alignSelf':
            itemView.style.alignSelf = alignSelf;
            break;
        case 'order':
            itemView.style.order = order;
            break;
        case 'marginLeft':
            itemView.style.marginLeft = marginLeft;
            break;
        case 'marginTop':
            itemView.style.marginTop = marginTop;
            break;
    }



}

calcStyle();