<template>
  <div>hello guy, i am campaign page</div>
  <div class="campaign-container">
    <div class="campaign-top-content">
      <div class="campaign-date-picker-container">
        <div>
          <DatePicker />
        </div>
      </div>
    </div>
    <div class="campaign-data-table">
      <table class="table-campaign">
        <tr >
          <th>Campaign name</th>
          <th>Status</th>
          <th>Used_amount</th>
          <th>Usage_rate</th>
          <th>Budget</th>
          <th>Start date</th>
          <th>End date</th>
        </tr>
        <tr v-for="(c, index) in campaign" :key="index" @click="printInfo(c)">
          <td>{{c.name}}</td>
          <td>{{c.status}}</td>
          <td>{{c.used_amount}}</td>
          <td>{{c.usage_rate}}</td>
          <td>{{c.budget}}</td>
          <td>{{c.start_time.toLocaleDateString("en-US")}}</td>
          <td>{{c.end_time.toLocaleDateString("en-US")}}</td>
        </tr>
      </table>
    </div>
    <div class="campaign-pagnigation">
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import DatePicker from '../components/DatePicker.vue';
const info = ref([
  {id: 1, name: 'nhat',age: 18},
  {id: 2, name: 'thao',age: 18},
  {id: 3, name: 'quan',age: 18},
  {id: 4, name: 'y',age: 18},
  {id: 5, name: 'vu',age: 18},
  {id: 6, name: 'khiem',age: 18},
  {id: 7, name: 'huy',age: 18},
])

const campaign = ref([
  {
    id: 1, 
    name: 'campaign name 1',
    status: true,
    start_time: new Date("2022-12-1"),
    end_time: new Date("2022-12-3"),
    budget: 10000,
    bid_amount: 10,
    title: "this is title 1",
    description: "some desc",
    banner: "jjjj",
    final_url: "https://hello.com",
    used_amount: 0,
    usage_rate: 0,
    user_id: 1,
    create_at: new Date("2022-12-1"),
    update_at: null,
  },
  {
    id: 2, 
    name: 'campaign name 2',
    status: true,
    start_time: new Date("2022-12-4"),
    end_time: new Date("2022-12-5"),
    budget: 10000,
    bid_amount: 10,
    title: "this is title 2",
    description: "some desc 2",
    banner: "jjjj",
    final_url: "https://hello.com",
    used_amount: 0,
    usage_rate: 0,
    user_id: 2,
    create_at: new Date("2022-12-1"),
    update_at: null,
  },
  
])

const printInfo = (inf) => {
  console.log("check infor: name: ",inf.name, "age: ",inf.age,)
}

</script>
<style scoped>

.table-campaign {
  border:1px solid black;
  border-collapse: collapse;
  width: 90%;
  
}

.table-campaign td, .table-campaign th {
  border: 1px solid rgb(19, 15, 15);
  padding: 15px 15px;
}

.table-campaign th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4a91b1;
  color: white;
}

.campaign-data-table{
margin-left: 20px;

}

.campaign-date-picker-container{
  width: 250px;
  margin: 15px 0 15px 15px;
}


</style>
