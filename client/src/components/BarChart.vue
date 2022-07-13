<template>
<panel title="BarChart">

  <v-simple-table dark fixed-header
    height="300px" width="100%">
      <thead>
        <tr>
          <th class="text-left">
            lyricslength
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="song in users" :key="song.id"
        >
          <td>{{song.lyricslength}}</td>
          <td> </td>
          <td>{{song.name}}</td>
        </tr>
      </tbody>
  </v-simple-table>
 </panel>
<!--<article>
  <section class="ml-4 text-2x text-blue-500" v-for="(User, email) in User" v-bind:key="id">
    {{User.email}}

  </section>  </article> -->

  <!-- <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />-->

</template>

<script>
import BarChart from '@/services/SongsService'
export default {
  data () {
    return {
      users: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.users = (await BarChart.index(value)).data
      }
    }
  }
}

/* import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
} */
</script>