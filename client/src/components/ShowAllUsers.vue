<template>
<panel title="Users">

  <v-simple-table dark fixed-header
    height="300px" width="100%">
      <thead>
        <tr>
          <th class="text-left">
            email
          </th>
          <th> </th>
          <th class="text-left">
            passwords
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users" :key="user.id"
        >
          <td>{{user.email}}</td>
          <td> </td>
          <td>{{user.clearpassword}}</td>
        </tr>
      </tbody>
  </v-simple-table>
 </panel>
<!--<article>
  <section class="ml-4 text-2x text-blue-500" v-for="(User, email) in User" v-bind:key="id">
    {{User.email}}

  </section>  </article> -->

</template>

<script>
import usersService from '@/services/usersService'

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
        this.users = (await usersService.index(value)).data
      }
    }
  }
}

</script>

<style>
td {
  width: 100px;
}
</style>
