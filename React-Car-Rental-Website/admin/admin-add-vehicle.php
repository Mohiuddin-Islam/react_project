<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

?>


<?php
  session_start();
  include('vendor/inc/config.php');
  include('vendor/inc/checklogin.php');
  check_login();
  $aid=$_SESSION['a_id'];
  //Add USer
  if(isset($_POST['add_veh'])){
    json_decode(file_get_contents('php://input'));

          extract($_POST);
            $v_dpic=$_FILES["v_dpic"]["name"];
		        move_uploaded_file($_FILES["v_dpic"]["tmp_name"],"../vendor/img/".$_FILES["v_dpic"]["name"]);

            $query="INSERT INTO tms_vehicle (v_name, v_pass_no, v_reg_no, v_driver, v_category, v_dpic,v_price, v_status ) values('$v_name','$v_pass_no','$v_reg_no','$v_driver','$v_category','$v_dpic','$v_price','$v_status')";
            $insert = mysqli_query($mysqli,$query);
                if($insert){
                    $succ = "Vehicle Added";
                }else {
                    $err = "Please Try Again Later";
                }
            }
?>
<!DOCTYPE html>
<html lang="en">

<?php include('vendor/inc/head.php');?>

<body id="page-top">
  <!--Start Navigation Bar-->
  <?php include("vendor/inc/nav.php");?>
  <!--Navigation Bar-->

  <div id="wrapper">

    <!-- Sidebar -->
    <?php include("vendor/inc/sidebar.php");?>
    <!--End Sidebar-->
    <div id="content-wrapper">

      <div class="container-fluid">
      <?php if(isset($succ)) {?>
                        <!--This code for injecting an alert-->
        <script>
                    setTimeout(function () 
                    { 
                        swal("Success!","<?php echo $succ;?>!","success");
                    },
                        100);
        </script>

        <?php } ?>
        <?php if(isset($err)) {?>
        <!--This code for injecting an alert-->
        <script>
                    setTimeout(function () 
                    { 
                        swal("Failed!","<?php echo $err;?>!","Failed");
                    },
                        100);
        </script>

        <?php } ?>

        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Vehicles</a>
          </li>
          <li class="breadcrumb-item active">Add Vehicle</li>
        </ol>
        <hr>
        <div class="card">
        <div class="card-header">
          Add Vehicle
        </div>
        <div class="card-body">
          <!--Add User Form-->
          <form method ="POST" enctype="multipart/form-data"> 
            <div class="form-group">
                <label for="exampleInputEmail1">Vehicle Name</label>
                <input type="text" placeholder="Enter Vehicle Name" required class="form-control" id="exampleInputEmail1" name="v_name">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Vehicle Registration Number</label>
                <input type="text" placeholder="Enter Vehicle Registration Number" class="form-control" id="exampleInputEmail1" name="v_reg_no">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Vehicle  Number Of Seats</label>
                <input type="text" placeholder="Enter Vehicle Seats Number" class="form-control" id="exampleInputEmail1" name="v_pass_no">
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Driver</label>
              <select class="form-control" name="v_driver" id="exampleFormControlSelect1">
                <?php

                $res=$mysqli->query("SELECT * FROM tms_user where u_category = 'Driver'"); //sql code to get to ten trains randomly
                
                $cnt=1;
                while($row=$res->fetch_object())
                {
                ?>
                <option><?php echo $row->u_fname;?> <?php echo $row->u_lname;?></option>
                <?php }?> 
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Vehicle Category</label>
              <select class="form-control" name="v_category" id="exampleFormControlSelect1">
                <option>Premio</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>AXS</option>
                <option>Land Cruiser</option>
                <option>Hybrid</option>
                <option>Audi-R8</option>
                <option>Corolla</option>
                <option>Harrier-EV</option>
                <option>Petrol</option>
                <option>X-Pander</option>
                <option>Rogue-SV</option>
                <option>BMW-X8</option>
                <option>CV-R</option>



              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Vehicle Status</label>
              <select class="form-control" name="v_status" id="exampleFormControlSelect1">
                <option>Booked</option>
                <option>Available</option>
                
              </select>
            </div>

            
            <div class="form-group">
                <label for="exampleInputEmail1">Vehicle Price</label>
                <input type="text" placeholder="Enter Price" class="form-control" id="exampleInputEmail1" name="v_price">
            </div>

            <div class="form-group col-md-12">
                <label for="exampleInputEmail1">Vehicle Picture</label>
                <input type="file" class="btn btn-success" id="exampleInputEmail1" name="v_dpic">
            </div>

            <button type="submit" name="add_veh" class="btn btn-success">Add Vehicle</button>
          </form>
          <!-- End Form-->
        </div>
      </div>
      
      <hr>
    

      <!-- Sticky Footer -->
      <?php include("vendor/inc/footer.php");?>

    </div>
    <!-- /.content-wrapper -->

  </div>
  <!-- /#wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-danger" href="admin-logout.php">Logout</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap core JavaScript-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Page level plugin JavaScript-->
  <script src="vendor/chart.js/Chart.min.js"></script>
  <script src="vendor/datatables/jquery.dataTables.js"></script>
  <script src="vendor/datatables/dataTables.bootstrap4.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="vendor/js/sb-admin.min.js"></script>

  <!-- Demo scripts for this page-->
  <script src="vendor/js/demo/datatables-demo.js"></script>
  <script src="vendor/js/demo/chart-area-demo.js"></script>
  <!--INject Sweet alert js-->
  <script src="vendor/js/swal.js"></script>

</body>

</html>
