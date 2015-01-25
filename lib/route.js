Router.map(function(){

	Router.configure({
		layoutTemplate: 'layout'
	});

    // this.route('dashboard', {path: '/dashboard'} );
    this.route('login', {path: '/'} );
    this.route('pipe', {path: '/pipe'} );
    this.route('billing', {path: '/billing'} );
    this.route('incomes', {path: '/incomes'} );
    this.route('appliants', {path: '/appliants'} );
    // this.route('printbill', {path: '/print-bill'} );
});

