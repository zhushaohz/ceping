<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <p>{{ p2 }}</p><br>
      <div>
        <p>{{ q1 }}</p>
        <input type="radio" id="true1" name="q1" value="true" v-model="picked1">
        <label for="true1">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false1" name="q1" value="false" v-model="picked1">
        <label for="false1">否</label>
      </div>
      <div>
        <p>{{ q2 }}</p>
        <input type="radio" id="true2" name="q2" value="true" v-model="picked2">
        <label for="true2">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false2" name="q2" value="false" v-model="picked2">
        <label for="false2">否</label>
      </div>
      <div>
        <p>{{ q3 }}</p>
        <input type="radio" id="true3" name="q3" value="true" v-model="picked3">
        <label for="true3">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false3" name="q3" value="false" v-model="picked3">
        <label for="false3">否</label>
      </div>
      <div>
        <p>{{ q4 }}</p>
        <input type="radio" id="true4" name="q4" value="true" v-model="picked4">
        <label for="true4">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false4" name="q4" value="false" v-model="picked4">
        <label for="false4">否</label>
      </div>
      <div>
        <p>{{ q5 }}</p>
        <input type="radio" id="true5" name="q5" value="true" v-model="picked5">
        <label for="true5">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false5" name="q5" value="false" v-model="picked5">
        <label for="false5">否</label>
      </div>
      <div>
        <p>{{ q6 }}</p>
        <input type="radio" id="true6" name="q6" value="true" v-model="picked6">
        <label for="true6">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false6" name="q6" value="false" v-model="picked6">
        <label for="false6">否</label>
      </div>
      <div>
        <p>{{ q7 }}</p>
        <input type="radio" id="true7" name="q7" value="true" v-model="picked7">
        <label for="true7">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false7" name="q7" value="false" v-model="picked7">
        <label for="false7">否</label>
      </div>
      <div>
        <p>{{ q8 }}</p>
        <input type="radio" id="true8" name="q8" value="true" v-model="picked8">
        <label for="true8">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false8" name="q8" value="false" v-model="picked8">
        <label for="false8">否</label>
      </div>
      <div>
        <p>{{ q9 }}</p>
        <input type="radio" id="true9" name="q9" value="true" v-model="picked9">
        <label for="true9">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false9" name="q9" value="false" v-model="picked9">
        <label for="false9">否</label>
      </div>
      <div>
        <p>{{ q10 }}</p>
        <input type="radio" id="true10" name="q10" value="true" v-model="picked10">
        <label for="true10">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false10" name="q10" value="false" v-model="picked10">
        <label for="false10">否</label>
      </div>
      <div>
        <p>{{ q11 }}</p>
        <input type="radio" id="true11" name="q11" value="true" v-model="picked11">
        <label for="true11">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false11" name="q11" value="false" v-model="picked11">
        <label for="false11">否</label>
      </div>
      <div>
        <p>{{ q12 }}</p>
        <input type="radio" id="true12" name="q12" value="true" v-model="picked12">
        <label for="true12">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false12" name="q12" value="false" v-model="picked12">
        <label for="false12">否</label>
      </div>
      <div>
        <p>{{ q13 }}</p>
        <input type="radio" id="true13" name="q13" value="true" v-model="picked13">
        <label for="true13">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false13" name="q13" value="false" v-model="picked13">
        <label for="false13">否</label>
      </div>
      <div>
        <p>{{ q14 }}</p>
        <input type="radio" id="true14" name="q14" value="true" v-model="picked14">
        <label for="true14">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false14" name="q14" value="false" v-model="picked14">
        <label for="false14">否</label>
      </div>
      <div>
        <p>{{ q15 }}</p>
        <input type="radio" id="true15" name="q15" value="true" v-model="picked15">
        <label for="true15">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false15" name="q15" value="false" v-model="picked15">
        <label for="false15">否</label>
      </div>
      <div>
        <p>{{ q16 }}</p>
        <input type="radio" id="true16" name="q16" value="true" v-model="picked16">
        <label for="true16">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false16" name="q16" value="false" v-model="picked16">
        <label for="false16">否</label>
      </div>
      <div>
        <p>{{ q17 }}</p>
        <input type="radio" id="true17" name="q17" value="true" v-model="picked17">
        <label for="true17">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false17" name="q17" value="false" v-model="picked17">
        <label for="false17">否</label>
      </div>
      <div>
        <p>{{ q18 }}</p>
        <input type="radio" id="true18" name="q18" value="true" v-model="picked18">
        <label for="true18">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false18" name="q18" value="false" v-model="picked18">
        <label for="false18">否</label>
      </div>
      <div>
        <p>{{ q19 }}</p>
        <input type="radio" id="true19" name="q19" value="true" v-model="picked19">
        <label for="true19">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false19" name="q19" value="false" v-model="picked19">
        <label for="false19">否</label>
      </div>
      <div>
        <p>{{ q20 }}</p>
        <input type="radio" id="true20" name="q20" value="true" v-model="picked20">
        <label for="true20">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false20" name="q20" value="false" v-model="picked20">
        <label for="false20">否</label>
      </div>
      <div>
        <p>{{ q21 }}</p>
        <input type="radio" id="true21" name="q21" value="true" v-model="picked21">
        <label for="true21">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false21" name="q21" value="false" v-model="picked21">
        <label for="false21">否</label>
      </div>
      <div>
        <p>{{ q22 }}</p>
        <input type="radio" id="true22" name="q22" value="true" v-model="picked22">
        <label for="true22">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false22" name="q22" value="false" v-model="picked22">
        <label for="false22">否</label>
      </div>
      <div>
        <p>{{ q23 }}</p>
        <input type="radio" id="true23" name="q23" value="true" v-model="picked23">
        <label for="true23">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false23" name="q23" value="false" v-model="picked23">
        <label for="false23">否</label>
      </div>
      <div>
        <p>{{ q24 }}</p>
        <input type="radio" id="true24" name="q24" value="true" v-model="picked24">
        <label for="true24">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false24" name="q24" value="false" v-model="picked24">
        <label for="false24">否</label>
      </div>
      <div>
        <p>{{ q25 }}</p>
        <input type="radio" id="true25" name="q25" value="true" v-model="picked25">
        <label for="true25">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false25" name="q25" value="false" v-model="picked25">
        <label for="false25">否</label>
      </div>
      <div>
        <p>{{ q26 }}</p>
        <input type="radio" id="true26" name="q26" value="true" v-model="picked26">
        <label for="true26">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false26" name="q26" value="false" v-model="picked26">
        <label for="false26">否</label>
      </div>
      <div>
        <p>{{ q27 }}</p>
        <input type="radio" id="true27" name="q27" value="true" v-model="picked27">
        <label for="true27">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false27" name="q27" value="false" v-model="picked27">
        <label for="false27">否</label>
      </div>
      <div>
        <p>{{ q28 }}</p>
        <input type="radio" id="true28" name="q28" value="true" v-model="picked28">
        <label for="true28">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false28" name="q28" value="false" v-model="picked28">
        <label for="false28">否</label>
      </div>
      <div>
        <p>{{ q29 }}</p>
        <input type="radio" id="true29" name="q29" value="true" v-model="picked29">
        <label for="true29">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false29" name="q29" value="false" v-model="picked29">
        <label for="false29">否</label>
      </div>
      <div>
        <p>{{ q30 }}</p>
        <input type="radio" id="true30" name="q30" value="true" v-model="picked30">
        <label for="true30">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false30" name="q30" value="false" v-model="picked30">
        <label for="false30">否</label>
      </div>
      <div>
        <p>{{ q31 }}</p>
        <input type="radio" id="true31" name="q31" value="true" v-model="picked31">
        <label for="true31">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false31" name="q31" value="false" v-model="picked31">
        <label for="false31">否</label>
      </div>
      <div>
        <p>{{ q32 }}</p>
        <input type="radio" id="true32" name="q32" value="true" v-model="picked32">
        <label for="true32">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false32" name="q32" value="false" v-model="picked32">
        <label for="false32">否</label>
      </div>
      <div>
        <p>{{ q33 }}</p>
        <input type="radio" id="true33" name="q33" value="true" v-model="picked33">
        <label for="true33">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false33" name="q33" value="false" v-model="picked33">
        <label for="false33">否</label>
      </div>
      <div>
        <p>{{ q34 }}</p>
        <input type="radio" id="true34" name="q34" value="true" v-model="picked34">
        <label for="true34">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false34" name="q34" value="false" v-model="picked34">
        <label for="false34">否</label>
      </div>
      <div>
        <p>{{ q35 }}</p>
        <input type="radio" id="true35" name="q35" value="true" v-model="picked35">
        <label for="true35">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false35" name="q35" value="false" v-model="picked35">
        <label for="false35">否</label>
      </div>
      <div>
        <p>{{ q36 }}</p>
        <input type="radio" id="true36" name="q36" value="true" v-model="picked36">
        <label for="true36">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false36" name="q36" value="false" v-model="picked36">
        <label for="false36">否</label>
      </div>
      <div>
        <p>{{ q37 }}</p>
        <input type="radio" id="true37" name="q37" value="true" v-model="picked37">
        <label for="true37">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false37" name="q37" value="false" v-model="picked37">
        <label for="false37">否</label>
      </div>
      <div>
        <p>{{ q38 }}</p>
        <input type="radio" id="true38" name="q38" value="true" v-model="picked38">
        <label for="true38">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false38" name="q38" value="false" v-model="picked38">
        <label for="false38">否</label>
      </div>
      <div>
        <p>{{ q39 }}</p>
        <input type="radio" id="true39" name="q39" value="true" v-model="picked39">
        <label for="true39">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false39" name="q39" value="false" v-model="picked39">
        <label for="false39">否</label>
      </div>
      <div>
        <p>{{ q40 }}</p>
        <input type="radio" id="true40" name="q40" value="true" v-model="picked40">
        <label for="true40">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false40" name="q40" value="false" v-model="picked40">
        <label for="false40">否</label>
      </div>
      <div>
        <p>{{ q41 }}</p>
        <input type="radio" id="true41" name="q41" value="true" v-model="picked41">
        <label for="true41">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false41" name="q41" value="false" v-model="picked41">
        <label for="false41">否</label>
      </div>
      <div>
        <p>{{ q42 }}</p>
        <input type="radio" id="true42" name="q42" value="true" v-model="picked42">
        <label for="true42">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false42" name="q42" value="false" v-model="picked42">
        <label for="false42">否</label>
      </div>
      <div>
        <p>{{ q43 }}</p>
        <input type="radio" id="true43" name="q43" value="true" v-model="picked43">
        <label for="true43">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false43" name="q43" value="false" v-model="picked43">
        <label for="false43">否</label>
      </div>
      <div>
        <p>{{ q44 }}</p>
        <input type="radio" id="true44" name="q44" value="true" v-model="picked44">
        <label for="true44">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false44" name="q44" value="false" v-model="picked44">
        <label for="false44">否</label>
      </div>
      <div>
        <p>{{ q45 }}</p>
        <input type="radio" id="true45" name="q45" value="true" v-model="picked45">
        <label for="true45">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false45" name="q45" value="false" v-model="picked45">
        <label for="false45">否</label>
      </div>
      <div>
        <p>{{ q46 }}</p>
        <input type="radio" id="true46" name="q46" value="true" v-model="picked46">
        <label for="true46">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false46" name="q46" value="false" v-model="picked46">
        <label for="false46">否</label>
      </div>
      <div>
        <p>{{ q47 }}</p>
        <input type="radio" id="true47" name="q47" value="true" v-model="picked47">
        <label for="true47">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false47" name="q47" value="false" v-model="picked47">
        <label for="false47">否</label>
      </div>
      <div>
        <p>{{ q48 }}</p>
        <input type="radio" id="true48" name="q48" value="true" v-model="picked48">
        <label for="true48">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false48" name="q48" value="false" v-model="picked48">
        <label for="false48">否</label>
      </div>
      <div>
        <p>{{ q49 }}</p>
        <input type="radio" id="true49" name="q49" value="true" v-model="picked49">
        <label for="true49">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false49" name="q49" value="false" v-model="picked49">
        <label for="false49">否</label>
      </div>
      <div>
        <p>{{ q50 }}</p>
        <input type="radio" id="true50" name="q50" value="true" v-model="picked50">
        <label for="true50">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false50" name="q50" value="false" v-model="picked50">
        <label for="false50">否</label>
      </div>
      <div>
        <p>{{ q51 }}</p>
        <input type="radio" id="true51" name="q51" value="true" v-model="picked51">
        <label for="true51">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false51" name="q51" value="false" v-model="picked51">
        <label for="false51">否</label>
      </div>
      <div>
        <p>{{ q52 }}</p>
        <input type="radio" id="true52" name="q52" value="true" v-model="picked52">
        <label for="true52">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false52" name="q52" value="false" v-model="picked52">
        <label for="false52">否</label>
      </div>
      <div>
        <p>{{ q53 }}</p>
        <input type="radio" id="true53" name="q53" value="true" v-model="picked53">
        <label for="true53">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false53" name="q53" value="false" v-model="picked53">
        <label for="false53">否</label>
      </div>
      <div>
        <p>{{ q54 }}</p>
        <input type="radio" id="true54" name="q54" value="true" v-model="picked54">
        <label for="true54">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false54" name="q54" value="false" v-model="picked54">
        <label for="false54">否</label>
      </div>
      <div>
        <p>{{ q55 }}</p>
        <input type="radio" id="true55" name="q55" value="true" v-model="picked55">
        <label for="true55">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false55" name="q55" value="false" v-model="picked55">
        <label for="false55">否</label>
      </div>
      <div>
        <p>{{ q56 }}</p>
        <input type="radio" id="true56" name="q56" value="true" v-model="picked56">
        <label for="true56">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false56" name="q56" value="false" v-model="picked56">
        <label for="false56">否</label>
      </div>
      <div>
        <p>{{ q57 }}</p>
        <input type="radio" id="true57" name="q57" value="true" v-model="picked57">
        <label for="true57">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false57" name="q57" value="false" v-model="picked57">
        <label for="false57">否</label>
      </div>
      <div>
        <p>{{ q58 }}</p>
        <input type="radio" id="true58" name="q58" value="true" v-model="picked58">
        <label for="true58">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false58" name="q58" value="false" v-model="picked58">
        <label for="false58">否</label>
      </div>
      <div>
        <p>{{ q59 }}</p>
        <input type="radio" id="true59" name="q59" value="true" v-model="picked59">
        <label for="true59">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false59" name="q59" value="false" v-model="picked59">
        <label for="false59">否</label>
      </div>
      <div>
        <p>{{ q60 }}</p>
        <input type="radio" id="true60" name="q60" value="true" v-model="picked60">
        <label for="true60">是</label><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="radio" id="false60" name="q60" value="false" v-model="picked60">
        <label for="false60">否</label>
      </div>
    </div>
    <div><button v-on:click="rrr">查看测试结果</button></div>
  </div>
</template>

<script>
export default {
  name: 'Ceshi',
  data () {
    return {
      msg: '霍兰德职业兴趣测试',
      p2: '下面列举了若干种活动，请就这些活动判断你的好恶。喜欢的，请选择“是”；不喜欢的，请选择“否”。共有60道题，请按顺序回答全部问题。',
      p3: '第二部分：您感兴趣的职业',
      picked1: '',
      picked2: '',
      picked3: '',
      picked4: '',
      picked5: '',
      picked6: '',
      picked7: '',
      picked8: '',
      picked9: '',
      picked10: '',
      picked11: '',
      picked12: '',
      picked13: '',
      picked14: '',
      picked15: '',
      picked16: '',
      picked17: '',
      picked18: '',
      picked19: '',
      picked20: '',
      picked21: '',
      picked22: '',
      picked23: '',
      picked24: '',
      picked25: '',
      picked26: '',
      picked27: '',
      picked28: '',
      picked29: '',
      picked30: '',
      picked31: '',
      picked32: '',
      picked33: '',
      picked34: '',
      picked35: '',
      picked36: '',
      picked37: '',
      picked38: '',
      picked39: '',
      picked40: '',
      picked41: '',
      picked42: '',
      picked43: '',
      picked44: '',
      picked45: '',
      picked46: '',
      picked47: '',
      picked48: '',
      picked49: '',
      picked50: '',
      picked51: '',
      picked52: '',
      picked53: '',
      picked54: '',
      picked55: '',
      picked56: '',
      picked57: '',
      picked58: '',
      picked59: '',
      picked60: '',
      numr: '0',
      numi: '0',
      numa: '0',
      nums: '0',
      nume: '0',
      numc: '0',
      q1: '1．装配修理电器或玩具',
      q2: '2．修理自行车',
      q3: '3．用木头做东西',
      q4: '4．开汽车或摩托车',
      q5: '5．用机器做东西',
      q6: '6．参加木工技术学习班',
      q7: '7．参加制图描图学习班',
      q8: '8．驾驶卡车或拖拉机',
      q9: '9．参加机械和电气学习班',
      q10: '10．装配修理机器',
      q11: '11．读科技图书和杂志',
      q12: '12．在实验室工作',
      q13: '13．改良水果品种，培育新的水果',
      q14: '14．调查了解土和金属等物质的成分',
      q15: '15．研究自己选择的特殊问题',
      q16: '16．解算术或玩数学游戏',
      q17: '17．物理课',
      q18: '18．化学课',
      q19: '19．几何课',
      q20: '20．生物课',
      q21: '21．素描/制图或绘画',
      q22: '22．参加话剧/戏剧',
      q23: '23．设计家具/布置室内',
      q24: '24．练习乐器/参加乐队',
      q25: '25．欣赏音乐或戏剧',
      q26: '26．看小说/读剧本',
      q27: '27．从事摄影创作',
      q28: '28．写诗或吟诗',
      q29: '29．进艺术(美术/音乐)培训',
      q30: '30．练习书法',
      q31: '31．学校或单位组织的正式活动',
      q32: '32．参加某个社会团体或俱乐部活动',
      q33: '33．帮助别人解决困难',
      q34: '34．照顾儿童',
      q35: '35．出席晚会、联欢会、茶话会',
      q36: '36．和大家一起出去郊游',
      q37: '37．想获得关于心理方面的知识',
      q38: '38．参加讲座会或辩论会',
      q39: '39．观看或参加体育比赛和运动会',
      q40: '40．结交新朋友',
      q41: '41．说服鼓动他人',
      q42: '42．卖东西',
      q43: '43．谈论政治',
      q44: '44．制定计划、参加会议',
      q45: '45．以自己的意志影响别人的行为',
      q46: '46．在社会团体中担任职务',
      q47: '47．检查与评价别人的工作',
      q48: '48．结交名流',
      q49: '49．指导有某种目标的团体',
      q50: '50．参与政治活动',
      q51: '51．整理好桌面和房间',
      q52: '52．抄写文件和信件',
      q53: '53．为领导写报告或公务信函',
      q54: '54．检查个人收支情况',
      q55: '55．打字培训班',
      q56: '56．参加算盘、文秘等实务培训',
      q57: '57．参加商业会计培训班',
      q58: '58．参加情报处理培训班',
      q59: '59．整理信件、报告、记录等',
      q60: '60．写商业贸易信'
    }
  },
  methods: {
    rrr () {
      this.numr = 0
      this.numi = 0
      this.numa = 0
      this.nums = 0
      this.nume = 0
      this.numc = 0
      let datar = this.picked1 + this.picked2 + this.picked3 + this.picked4 + this.picked5 + this.picked6 + this.picked7 + this.picked8 + this.picked9 + this.picked10
      for (let i = 0, len = datar.length; i < len; i++)
      {
        if (datar[i] === 't') {
          this.numr++
        }
      }
      let datai = this.picked11 + this.picked12 + this.picked13 + this.picked14 + this.picked15 + this.picked16 + this.picked17 + this.picked18 + this.picked19 + this.picked20
      for (let j = 0, len = datai.length; j < len; j++)
      {
        if (datai[j] === 't') {
          this.numi++
        }
      }
      let dataa = this.picked21 + this.picked22 + this.picked23 + this.picked24 + this.picked25 + this.picked26 + this.picked27 + this.picked28 + this.picked29 + this.picked30
      for (let k = 0, len = dataa.length; k < len; k++)
      {
        if (dataa[k] === 't') {
          this.numa++
        }
      }
      let datas = this.picked31 + this.picked32 + this.picked33 + this.picked34 + this.picked35 + this.picked36 + this.picked37 + this.picked38 + this.picked39 + this.picked40
      for (let l = 0, len = datas.length; l < len; l++)
      {
        if (datas[l] === 't') {
          this.nums++
        }
      }
      let datae = this.picked41 + this.picked42 + this.picked43 + this.picked44 + this.picked45 + this.picked46 + this.picked47 + this.picked48 + this.picked49 + this.picked50
      for (let m = 0, len = datae.length; m < len; m++)
      {
        if (datae[m] === 't') {
          this.nume++
        }
      }
      let datac = this.picked51 + this.picked52 + this.picked53 + this.picked54 + this.picked55 + this.picked56 + this.picked57 + this.picked58 + this.picked59 + this.picked60
      for (let n = 0, len = datac.length; n < len; n++)
      {
        if (datac[n] === 't') {
          this.numc++
        }
      }
      console.log(datar)
      console.log(this.numr)
      console.log(datai)
      console.log(this.numi)
      console.log(this.numa)
      console.log(this.nums)
      console.log(this.nume)
      console.log(this.numc)
      let data = this.numr + ',' + this.numi + ',' + this.numa + ',' + this.nums + ',' + this.nume + ',' + this.numc
      console.log(data)
      this.$router.push({path: '/jieguo', query: {data: data}})
    }
  }
}
</script>

<style scoped>
p {
  text-align:justify;
}
button {
  outline: none;
  margin: 50px;
  padding: 10px;
  width: 70%;
  border: 1px solid #000;
  background-color: #fff;
  font-size: larger;
  border-radius: 5px;
}
</style>
