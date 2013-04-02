var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    
    initialize: function () {
        var self = this;
        this.store = new MemoryStore(function () {
            self.showAlert('Hello from Hussam', 'Greetings');
            $('body').html(new HomeView(self.store).render().el);
            //self.renderHomeView();
        });
        //this.homeTpl = Handlebars.compile($("#home-tpl").html());
        //this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());        
        //$('.search-key').on('keyup', $.proxy(this.findByName, this));
        //this.store = new MemoryStore();
       //this.store = new LocalStorageStore();
        //this.store = new WebSqlStore();
    }
};

app.initialize();