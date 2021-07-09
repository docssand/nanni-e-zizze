module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "~bootstrap/scss/functions";
                    @import "~@/assets/sass/vendors/bootstrap/custom.scss";
                    @import "~bootstrap/scss/variables";
                    @import "~bootstrap/scss/mixins";
                `
            }
        }
    },

    chainWebpack: config => {
        config
            .plugin('html')
            .tap( options => {
                options[0].title = "Pizzeria Nanni e Zizze"
                return options
            })
    }
}