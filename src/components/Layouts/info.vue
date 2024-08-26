<template>
<!-- Service -->
<div class=" service-sec1 d-flex align-items-center">
    <div class="container">
        <div class="row p-2">
            <div>
                <RouterLink class="routlink" to="/">Home page</RouterLink> <i class="bi bi-chevron-right"></i>
                <RouterLink class="routlink" to="/contact">Contact us</RouterLink>
            </div>
            <!-- <h1 class="my-3 ">{{current_data.title}}</h1> -->
            <p>with over 10 years of experience helping
                busineto fi d<br>comprehensive solution
            </p>
        </div>
    </div>
</div>
<!-- Service-section-2 -->
<div class=" service-sec2 d-flex align-items-center my-5">
    <div class="container">
        <div class="row ">
            <!-- col1   sidebar -->
            <sidemenu />
            <!-- col-2  information  -->
            <div class="col-sm-9 pt-4 my-4">
                <!--row 1-->
                <div class="row R1">
                    <p class="mini-h mb-0 ">Service</p>

                    <!--1st data -->
                    <h2 class="pb-2"> {{ data[id].title }}</h2>
                    <p>{{ data[id].description }}</p>

                    <!--2nd topic-->
                    <div class="sub-heads" v-for="(topic, index) in data[id]['sub-topics']" :key="index">
                        <h5><b>{{ topic.title }}</b></h5>
                        <p>{{ topic.description }}</p>

                        <h6 v-if="topic['title-1']"><b>{{ topic['title-1'] }}</b></h6>
                        <p v-if="topic['small-para']">{{ topic['small-para'] }}</p>
                        <ul v-if="topic.sublist">
                            <li v-for="(item, i) in topic.sublist" :key="i">{{ item }}</li>
                        </ul>
                        <p v-if="topic['description-1']">{{ topic['description-1'] }}</p>
                        <p v-if="topic['description-2']">{{ topic['description-2'] }}</p>
                        <p v-if="topic['description-3']">{{ topic['description-3'] }}</p>
                        <p v-if="topic['description-4']">{{ topic['description-4'] }}</p>
                        <p v-if="topic['description-5']">{{ topic['description-5'] }}</p>
                        <!-- Special case for the "box-heading" and "box-sublist" -->
                        <div v-if="topic['box-heading']" class="blue-box">
                            <h4>{{ topic['box-heading'] }}</h4>
                            <p>{{ topic['box-description'] }}</p>
                                <!------list---->
                            <ul>
                            <li v-for="(item, idx) in topic['box-sublist']" :key="idx">{{ item }}</li>
                            </ul>
                        </div>
                        <!-- Render table if it exists in Topic -->
                        <table v-if="topic.table" class="table">
                            <thead>
                                <tr>
                                    <th v-for="(header, headerIndex) in topic.table.headers" :key="headerIndex">{{ header }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, rowIndex) in topic.table.rows" :key="rowIndex">
                                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                                </tr>
                            </tbody>
                        </table>

                        <!--3rd subTopic-->
                        <div v-if="topic['sub-topics']" v-for="(subTopic, subIndex) in topic['sub-topics']" :key="subIndex">
                            <h5>{{ subTopic.title }}</h5>
                            <h6 v-if="subTopic['title-1']"><b>{{ subTopic['title-1'] }}</b></h6>
                            <p>{{ subTopic.description }}</p>
                            <p v-if="subTopic['small-para']">{{ subTopic['small-para'] }}</p>
                            <!------list---->
                            <ul v-if="subTopic.sublist">
                                <li v-for="(listItem, listIndex) in subTopic.sublist" :key="listIndex">
                                    {{listItem }}</li>
                            </ul>
                        <!-- Render table if it exists in subTopic -->
                            <table v-if="subTopic.table" class="table">
                                <thead>
                                    <tr>
                                    <th v-for="(header, headerIndex) in subTopic.table.headers" :key="headerIndex">{{ header }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, rowIndex) in subTopic.table.rows" :key="rowIndex">
                                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <p v-if="subTopic['description-1']">{{ subTopic['description-1'] }}</p>
                            <p v-if="subTopic['description-2']">{{ subTopic['description-2'] }}</p>
                            <p v-if="subTopic['description-3']">{{ subTopic['description-3'] }}</p>
                            <p v-if="subTopic['description-4']">{{ subTopic['description-4'] }}</p>
                            <p v-if="subTopic['description-5']">{{ subTopic['description-5'] }}</p>
                            <!-- Special case for the "box-heading" and "box-sublist" -->
                            <div v-if="subTopic['box-heading']" class="blue-box">
                                <h6><b>{{ subTopic['box-heading'] }}</b></h6>
                                <p>{{ subTopic['box-description'] }}</p>
                                <ul>
                                <li v-for="(item, idx) in subTopic['box-sublist']" :key="idx">{{ item }}</li>
                                </ul>
                            </div>

                            <!--4th nestedTopics-->

                            <div v-if="subTopic['nestedTopic']" v-for="(nestedTopic, nestedIndex) in subTopic['sub-topics']" :key="nestedIndex">
                                <h5>{{ nestedTopic.title }}</h5>
                                <p>{{ nestedTopic.description }}</p>
                                <h5 v-if="nestedTopic['title-1']">{{nestedTopic['title-1']}}</h5>
                                <!------list---->
                                <ul v-if="nestedTopic.sublist">
                                    <li v-for="(listItem, listIndex) in nestedTopic.sublist" :key="listIndex">
                                        {{listItem }}</li>
                                </ul>
                                <p v-if="nestedTopic['description-1']">{{ nestedTopic['description-1'] }}</p>
                                 <!-- Render table if it exists in nestedTopics -->
                                <table v-if="nestedTopic.table" class="table">
                                    <thead>
                                        <tr>
                                            <th v-for="(header, headerIndex) in nestedTopic.table.headers" :key="headerIndex">{{ header }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, rowIndex) in nestedTopic.table.rows" :key="rowIndex">
                                            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import sidemenu from './sidemenu.vue';
import {
    useRoute
} from 'vue-router';
import main_data from './data/main_data';

export default {
    name: "info.vue",

    data() {
        return {
            data: main_data,
            id: 0,
        }
    },
    mounted() {
        const route = useRoute();
        this.id = route.params.id;
    },
    components: {
        sidemenu
    }

}
</script>

<style scoped>
.blue-box {
  background-color: #f4f5f7;
  border: 1px solid #dad6d6;
  padding: 20px;
  border-radius: 5px;
  margin: 10px 0px;
}
table,tr,td,th{
   
  background-color: #f4f5f7;
  border: 1px solid #dad6d6;
}
p {
    font-size: 15px;

}

.routlink {
    color: white;
    text-decoration: none;

}

.bi-chevron-right {
    color: white !important;
    /* font-weight:bold; */

}

.service-sec1 {
    color: white;
    background-image: url("../../assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 400px;

}

/* Service-section-2 */
/* col1 */
.mini-h,
h4 {
    color: rgb(0, 84, 139);
    font-weight: 700;

}

.service-sec2 li {
    font-size: 15px;

}

.service-sec2 h2 {
    color: #18ba60;
}

.service-sec2 img {
    height: auto;
    width: 100%;
}

/* col2 */
.servpage-sec1-col2 {
    width: 400px;
    /* background-color: #8bdbaf; */
    padding: 25px 25px;
}

.service-sec2 h3 {
    font-size: 25px;
    margin: 30px 0;
    color: #3a526a;
}

.service-sec2 hr {
    border-bottom: 2px solid gray;
    margin-bottom: 40px;
}

/* .service-sec2 ul {
    padding-left: 5px;
    list-style: none;
}

.service-sec2 ul li {
    margin-bottom: 25px;
}

.service-sec2 ul li:hover {
    cursor: pointer;
    font-weight: 700;
    color: #3a526a;
    text-decoration: underline #18ba60 1px;
} */

/*********form************/
.f {
    width: 100%;
    height: auto;
    background-color: #F1F6F2;
    border-radius: 25px;
}
.send-form {
    margin: 30px 15px;
    padding: 20px 0px;

}

.send-form input {
    width: 100%;
    height: auto;
    font-size: 17px;
    margin-bottom: 30px;
    background-color: white;
    border: transparent;
    padding: 8px;
}

.send-form .msg {
    padding-bottom: 75px;
}

.send-form button {
    width: 100%;
    height: 40px;
    font-size: 17px;
    font-weight: 600;
    color: white;
    background-color: #18ba60;
    border: transparent;
}

/****Row R2 ****/
.R1 ul {
    text-decoration: none;
}

.R2-list {
    padding-left: 30px;
}

.R2 ul li,
.R3 ul li {
    margin-bottom: 0px;
    list-style: disc;
    font-weight: 500;
    color: #000;
}

/****Row R3 ****/
.R3 h5 {
    font-size: 18px;
    padding: 0 10px;
}

.R3 span {
    color: rgb(0, 84, 139);
    margin-bottom: 15px;
}

.R3 table {
    background: #eff7ff;
    border: solid 1px #e2e2e2;
    margin-bottom: 20px;
    margin-left: 10px;
}

.R3 table tr,
.R3 table td {
    border: solid 2px #e2e2e2;
    padding: 5px 2px 2px 5px;
    font-size: 15px;
}

.R3 .card {
    background: #eff7ff;
    border: solid 2px #e2e2e2;
    padding: 15px;
    width: 600px;
    margin-bottom: 20px;
    margin-left: 10px;
}

.R3 .card .card-body {
    display: flex;
    align-items: start;
    gap: 25px;
    padding: 15px 0px;
}

.R3 .card .card-body button {
    width: 200px;
    height: 35px;
}

.R3 .table-heading {
    margin-bottom: 10px;
}

.R3 .R3-ul-list {
    margin-left: 10px;
}
</style>
