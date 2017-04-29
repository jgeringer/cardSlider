//Test...
// const SPACE_ID = 'developer_bookshelf';
// const ACCESS_TOKEN = '0b7f6x59a0';

const SPACE_ID = '80i6tpmeg7a3';
const ACCESS_TOKEN = '822b96300acb0b90ab84ad3ee9ced62e41d4945d27150f1b57283888ae354b35';


var client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});

var app = new Vue({
    el: '#app',
    data: {
        message: '',
        seen: true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],
        groceryList: [
            { text: 'Veggies' },
            { text: 'Cheese' },
            { text: 'Pizza!' }
        ],
        fieldList: [],
        products: []
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});

//Component
Vue.component('todo-item', {
    //template: '<li>This is a todo item</li>'
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});


//client.getEntry('6dbjWqNd9SqccegcqYq224').then(function (entry) {   //5PeGS2SoZGSa4GuiQsigQu
// client.getContentType('2PqfXUJwE8qSYKuM0U6w8M').then(function (contentType) {
//     //console.log('Entry:', entry);
//     console.log('contentType:', contentType);

//     // new Vue({
//     //     el: '#app',
//     //     data: {
//     //         message: entry.fields.author 
//     //     }
//     // });

//     //app.message = entry.fields.author;
// });

// client.getEntries().then(function (entries) {
//     //console.log('Entry:', entry);
//     console.log('entries:', entries);

//     // new Vue({
//     //     el: '#app',
//     //     data: {
//     //         message: entry.fields.author 
//     //     }
//     // });

//     // entries.items.forEach(function (entry) {
//     //     if(entry.fields.productName) {
//     //         console.log(entry.fields.productName);
//     //     }
//     //     if(entry.fields.companyName) {
//     //         console.log(entry.fields.logo.fields.file.url);
//     //     }
//     // });

//     //app.products = message;
// });

var productList;

client.getEntries({
  'content_type': '2PqfXUJwE8qSYKuM0U6w8M'   //brand id: sFzTZbSuM8coEwygeUYes   product: 2PqfXUJwE8qSYKuM0U6w8M
}).then(function (entries) {

    console.log('product entries: ', entries);

    productList = new Vue({
        el: '#productListing',
        data: {
            products: []
        }
    });

    entries.items.forEach(function (entry) {
        productList.products.push(entry.fields.productName);
    });

});




// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter and then call Vue.use(VueRouter).

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const User = {
  template: `<div>User {{ $route.params.id }}</div>`
}



// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.

const routes = [
  { path: '/contentful/foo', component: Foo },
  { path: '/contentful/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    //mode: 'history',  //this makes it work without the # hash in the url
    //routes // short for routes: routes
    routes: [
        { path: '/user/:id', component: User }
    ]
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const routerApp = new Vue({
  router
}).$mount('#routerApp')

// Now the app has started!



// client.getContentType('book').then(function (contentType) {
//   console.log('Content Type:', contentType);
// });



//Mine...

// const SPACE_ID = '80i6tpmeg7a3';
// const ACCESS_TOKEN = '822b96300acb0b90ab84ad3ee9ced62e41d4945d27150f1b57283888ae354b35';

// var client = contentful.createClient({
//     space: SPACE_ID,
//     accessToken: ACCESS_TOKEN
// });

// client.getEntry('6dbjWqNd9SqccegcqYq224').then(function (entry) {
//   console.log('Entry:', entry);
// });