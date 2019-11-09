// import "./mapBaidu.js";
Vue.component('async-weather', {
    template: `
    <div class="">
        <div class="container mt-3 pt-3 border solid">
            <h3 class="h3">Search City</h3>
            <form class="form-group form-inline ml-5 mt-3" onsubmit="return false;">
                <input v-model="param" class="form-control w-25 ml-2" placeholder="City Name">
                <select name="units" v-model="unit" @change="onChange($event)" class="custom-select ml-2 w-25" >
                    <option value="metric" >Celcius</option>
                    <option value="imperial">Farenheit</option>
                </select>
                <button v-on:click=\"fetchWeather()\" class="ml-2 btn btn-block w-25 btn-outline-primary ">search</button>
                <p class="blockquote-footer mt-2 alert-danger ">Please search city in English for best results</p>
                </form>
                <p class="blockquote-footer alert-danger">Currently only supports english since weather api is not from China</p>
        </div>
        <current-weather v-if="info" v-bind:info="this.info" v-bind:unit="this.unit"></current-weather>
        <br>
        <!-- <future-info v-if="forecast" v-bind:future="this.forecast" > -->
        </future-info>
    </div>
    `,
    data() {
        return {
            param: '',
            info: '',
            display: '',
            forecast: '',
            unit: 'metric',
        }
    },
    methods: {
        async fetchWeather() {
            this.info = await getWeatherForSearch(this.param, this.unit);
            // console.log(this.info);
            this.display = getWeatherInfo(this.info);
            this.mapSearch();
            this.forecast = await forecast(this.param, this.unit);
            // console.log(this.forecast)
        },
        mapSearch() {
            // Can be called 
            local.search(this.param)
        },
        onChange(event) {
            this.unit = event.target.value;
            // console.log(this.unit);
        }

    },
})

Vue.component('future-info', {
    template:
        `
        <div>
            <div v-for="(item,index) in future" >
                <div class="card ">
                    <div class="card-body">
                        <h3 class="card-title">Day</h3>
                        <p class="card-text">
                            {{item.weather.description}}
                            Temperature Max: {{item.main.temp_max}}   
                            Temperature Min: {{item.main.temp_min}}
                        </p>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ['future'],
})

Vue.component('current-weather', {
    template:
        `
    <div >
        <div class="card p-3 pl-5">
        <h1 class="h1">Current Weather</h1>
        <dl class="row">
            <dt class="col-sm-8">City:</dt>
            <dd class="col-sm-4"> <strong><em>{{info.name}}</em></strong></dd>

            <dt class="col-sm-8">Temperature:</dt>
            <dd class="col-sm-4" v-if="unit==='metric'">  <em>{{info.main.temp}}°C</em></dd>
            <dd class="col-sm-4" v-if="unit==='imperial'">  <em>{{info.main.temp}}°F</em></dd>

            <dt class="col-sm-8">Description:</dt>
            <dd class="col-sm-4"><em> {{info.weather["0"].main}}</em> </dd>


            <dt class="col-sm-8">Max Temp:</dt>
            <dd class="col-sm-4" v-if="unit==='metric'"> <em>{{info.main.temp_max}}°C</em></dd>
            <dd class="col-sm-4" v-if="unit==='imperial'">  <em>{{info.main.temp_max}}°F</em></dd>

            <dt class="col-sm-8">Min Temp:</dt>
            <dd class="col-sm-4" v-if="unit==='metric'"> <em>{{info.main.temp_min}}°C</em></dd>        
            <dd class="col-sm-4" v-if="unit==='imperial'">  <em>{{info.main.temp_min}}°F</em></dd>
        </dl>
        </div>
    </div>
    `,
    props: ['info', 'unit'],
});

const vueApp = new Vue({
    el: "#app",
    data: {
        display: 'test'
    },

});