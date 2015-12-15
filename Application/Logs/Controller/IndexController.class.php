<?php
namespace Logs\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function indexAction(){

        $monthEventsSource = array();

        $dt = I('get.dt');
        $date = $dt?substr($dt,0,10):time();
        
        $month = date("Y-m",$date);
        $daydate = strtotime($month);

        for($i=0;$i<31;$i++){
            $monthEventsSource['plan'][] = array('title'=> '工作计划','start'=>date(strtotime("+".$i." day",$daydate)),"className"=> 'label-success');
            $monthEventsSource['summary'][] = array('title'=> '工作总结','start'=>date(strtotime("+".$i." day",$daydate)),);
        }
        $this -> assign('monthEventsSource',json_encode($monthEventsSource));
        $this -> assign('nowDay',$date);

    	$this -> display();
    }
    public function getEventAction(){
    	$data = I('post.');

    	$returnData['startTime'] = $this -> _splitTime($data['startTime']);
        $returnData['endTime'] = $this -> _splitTime($data['endTime']);
        $returnData['id'] = strtotime($data['startTime']);

        if($data['eventType'] == 'plan'){
            $returnData['title'] = "工作计划";
            $returnData['type'] = 'plan';
            $returnData['className'] = 'label-success';
        }else{
            $returnData['title'] = "工作总结";
            $returnData['type'] = 'summary';
            $returnData['className'] = 'label-info';
        }
        
		echo (json_encode($returnData));
    }

    public function dayView(){
        $this->display();
    }

    private function _splitTime($str){
    	$returnTime = array();

    	$returnTime['year'] = substr($str,0,4);
    	$returnTime['month'] = substr($str,5,2);
    	$returnTime['day'] = substr($str,8,2);
    	$returnTime['hour'] = substr($str,11,2);
    	$returnTime['minute'] = substr($str,14,2);
    	return $returnTime;
    }
}