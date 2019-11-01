<template>
  <div class="ranking container">
    <el-row :gutter="100" class='bor'>
      <el-col :span="6" class="left">
        <h4>云音乐特色榜</h4>
        <ul v-for="(items,i) in list">
          <li v-if="i<4" @click="getRanking(i)">
            <div><img :src="items.coverImgUrl" width="50"></div>
            <div class="ulDiv2">
              <p>{{items.name}}</p>
              <p class="p2">{{items.updateFrequency}}</p>
            </div>
          </li>
        </ul>
        <h4>全球媒体榜</h4>
        <ul v-for="(items,i) in list">
          <li v-if="i>4" @click="getRanking(i)">
            <div><img :src="items.coverImgUrl" width="50"></div>
            <div class="ulDiv2">
              <p>{{items.name}}</p>
              <p class="p2">{{items.updateFrequency}}</p>
            </div>
          </li>
        </ul>
      </el-col>
      <!-- 左end-->
      <!-- 右start-->
      <el-col :span="18"
        class="right">
        <el-row :gutter="40">
          <el-col :span="6">
            <img :src="coverImgUrl" class="rimg">
          </el-col>
          <el-col :span="18">
            <h3>{{sname}}</h3>
            <p class="el-icon-time"> 最近更新：{{(new Date(updateTime).getMonth()+1).toString().padStart(2,'0')}}月{{new Date(updateTime).getDate().toString().padStart(2,'0')}}日<span
                class="lspan">（{{updateFrequency}}）</span></p>
            <div class="lButton">
              <button class="btn btn-primary  btn-primary "> <span class="el-icon-video-play btn-primary size"></span>播放
                <span class="el-icon-plus size plus"></span></button>
              <button class="btn bg"><span class="el-icon-folder-add bg size"></span> ({{subscribedCount}}) </button>
              <button class="btn bg"><span class="el-icon-share bg size"></span> (6666) </button>
              <button class="btn bg"><span class="el-icon-download bg size"></span>下载</button>
              <button class="btn bg"> <span class="el-icon-s-comment bg size"></span>(99999) </button>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <div style='margin-top:40px;'>
              <div class="pull-left">
                <span style="font-size: 26px;">歌曲列表</span>
              </div>
              <div class='pull-left sbj'><span style="color:#666666">{{trackCount}}首歌</span></div>
              <div class="pull-right sbj">播放:<span style="color:red">{{playCount}}</span>次</div>
            </div>
            <table class="table table-striped table-hover gao">
              <tr class="gdlb bg-success">
                <td width="60"> </td>
                <td width="350">标题</td>
                <td>时长</td>
                <td>歌手</td>
              </tr>
              <tr v-for="(items,index) in tracks">
                <td><span>{{index+1}}</span></td>
                <td v-if="index<3"><img :src="items.al.picUrl" width="50"><span class="el-icon-video-play size">
                  </span><span> {{(items.al.name).substring(0,15)}}</span></td>
                <td v-if="index>=3"><span class="el-icon-video-play size"> </span><span>{{(items.al.name).substring(0,20)}}</span></td>
                <td>{{new Date(items.dt).getMinutes().toString().padStart(2,'0')}}:{{new Date(items.dt).getSeconds().toString().padStart(2,'0')}}</td>
                <td><span>{{ getName(items.ar)}}</span></td>
              </tr>
            </table>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
    name: "topList",
    data() {
      return {
        list: [],
        coverImgUrl: '',
        sname: '',
        updateTime: '',
        updateFrequency: "",
        subscribedCount: '',
        playCount: '',
        trackCount: '',
        /* playlist*/
        tracks: []
      }
    },
    created() {
      this.getRanking(0)
    },
    methods: {

      getName(arr) {
        let str = "";
        for (let i = 0; i < arr.length; i++) {
          if (i != 0 && i != arr.length - 1) {
            str = str + arr[i].name + "/";
          } else {
            str = str + arr[i].name;
          }
        }

        if (str.length > 10) {
          str = str.substring(0, 10) + "...";
          return str;
        }
        return str;

      },
      getRanking(i) {
        this.$http.get('toplist/detail').then(req => {
          this.getPlayList(req.data.list[i].id)
          let lists = req.data.list
          this.list = lists
          this.coverImgUrl = req.data.list[i].coverImgUrl
          this.sname = req.data.list[i].name
          this.updateTime = req.data.list[i].updateTime
          this.updateFrequency = req.data.list[i].updateFrequency
          this.subscribedCount = req.data.list[i].subscribedCount
          this.playCount = req.data.list[i].playCount
          this.trackCount = req.data.list[i].trackCount
          //console.log(req)


        }).catch(err => {
          // alert("rankingLeft获取失败")
        });
      },
      getPlayList(id, index) {
        this.$http.get('/playlist/detail', {
          params: {
            id: id
          }
        }).then(req => {
          let tracks = req.data.playlist.tracks;
          this.tracks = tracks
          console.log(tracks)

        }).catch(err => {
          alert("排行榜歌单获取失败")
        })
      }
    }
  }
</script>

<style>
  .bor {
    border-right: 1px solid #909399;
    border-left: 1px solid #909399;
  }
  
  .left {
    margin-top: 40px;
  }
  
  ul li {
    display: flex;
    list-style-type: none;
    text-align: left;
  }
  
  .ulDiv2 {
    margin: 0 10px;
  }
  
  .p2,
  .lspan {
    color: #999999;
  }
  
  .bg {
    background: #E3E3E3;
  }
  
  .gdlb {
    margin-top: 30px;
    border-top: 2px solid red;
  }
  
  .sbj {
    padding: 13px 0;
    margin-left: 30px;
  }
  
  .right {
    border-left: 1px solid #909399;
    margin-top: 40px;
  }
  
  .rimg {
    width: 180px;
    border: 1px solid #909399;
    padding: 3px;
  
  }
  
  .gao {
    border: 1px solid #909399
  }
  
  .gao tr {
    height: 30px;
    line-height: 30px;
  }
  
  .gao td {
    padding-right: 40px;
  }
  
  .gao span {
    margin: 0 5px;
  }
  
  .gao img {
    margin: 10px 0;
  }
  
  .plus {
    border-left: 1px solid #2b659e;
    padding-left: 5px;
  
  }
  
  .size {
    font-size: 20px;
  }
</style>
