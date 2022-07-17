<template>
<div>
    <panel title="Clicks">

  <v-simple-table dark fixed-header
    height="300px" width="100%">
      <thead >
        <tr>
          <th class="text-right">
            Datum "  "
          </th>
          <th></th>
          <th class="text-left">
          Anzahl der Clicks
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
    {{User.email}} -->
</div>
</template>
<script>

export default({

})
</script>
