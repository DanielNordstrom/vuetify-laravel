import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.green.darken1, // #E53935
                secondary: colors.green.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
                danger: colors.red.darken1
            },
        },
    },
})
