<?php if (! defined('BASEPATH')) exit('No direct script access allowed');

class Main_model extends CI_Model{
    public function __construct(){
        // Call the CI_Model constructor
        parent::__construct();
        $this->load->library('phpmailer');
    }

    function get_home_page(){
        $this->db->from('home_page');
        return $this->db->get()->result();
    }

    function get_about_us(){
        $this->db->from('about_us');
        return $this->db->get()->result();
    }

    function get_home_sliders(){
        $this->db->from('home_sliders');
        $this->db->where( array('is_deleted'=>0,'is_active'=>1));       
        return $this->db->get()->result();
    }

    function get_services(){
        $this->db->from('services');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));
        return $this->db->get()->result();
    }

    function get_services_intro(){
        $this->db->from('services_intro');
        return $this->db->get()->result();
    }

    function get_water_sources(){
        $this->db->from('water_sources');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));        
        return $this->db->get()->result();
    }

    function get_water_sources_count(){
        $this->db->from('water_sources');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));        
        return $this->db->count_all_results();
    }

    function get_water_supply_schemes(){
        $this->db->from('water_supply_schemes');
        return $this->db->get()->result();
    }

    function get_water_tariffs(){
        $this->db->from('water_tariffs');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));        
        return $this->db->get()->result();
    }

    function get_water_tariffs_count(){
        $this->db->from('water_tariffs');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));        
        return $this->db->count_all_results();
    }

    function get_projects(){
        $this->db->from('projects');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));   
        $this->db->order_by('project_id', 'DESC');     
        return $this->db->get()->result();
    }
    function get_projects_count(){
        $this->db->from('projects');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));  
        $this->db->order_by('project_id', 'DESC');      
        return $this->db->count_all_results();
    }
    function get_latest_projects(){
        $this->db->select('*');
        $this->db->from('projects');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('project_id', 'DESC');

        $this->db->limit(5); 

        return $this->db->get()->result();
    }
    function get_project($project_reference_id){
        $this->db->from('projects');
        $this->db->where( array('project_reference_id'=>$project_reference_id));   
        return $this->db->get()->result();
    }

    function get_resourceful_information(){
        $this->db->from('resourceful_information');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));   
        $this->db->order_by('resourceful_information_id', 'DESC');     
        return $this->db->get()->result();
    }
    function get_resourceful_information_count(){
        $this->db->from('resourceful_information');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));  
        $this->db->order_by('resourceful_information_id', 'DESC');      
        return $this->db->count_all_results();
    }
    function get_latest_resourceful_information(){
        $this->db->select('*');
        $this->db->from('resourceful_information');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('resourceful_information_id', 'DESC');

        $this->db->limit(5); 

        return $this->db->get()->result();
    }
    function get_resourceful_information_detail($resourceful_information_reference_id){
        $this->db->from('resourceful_information');
        $this->db->where( array('resourceful_information_reference_id'=>$resourceful_information_reference_id));   
        return $this->db->get()->result();
    }

    function get_public_notices(){
        $this->db->from('public_notices');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));  
        $this->db->order_by('public_notice_id', 'DESC');              
        return $this->db->get()->result();
    }
    function get_public_notices_count(){
        $this->db->from('public_notices');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));  
        $this->db->order_by('public_notice_id', 'DESC');              
        return $this->db->count_all_results();
    }

    function get_interruption_notices(){
        $this->db->from('interruption_notices');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));  
        $this->db->order_by('interruption_notice_id', 'DESC');              
        return $this->db->get()->result();
    }
    function get_interruption_notices_count(){
        $this->db->from('interruption_notices');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));  
        $this->db->order_by('interruption_notice_id', 'DESC');              
        return $this->db->count_all_results();
    }

    function get_faqs(){
        $this->db->from('faqs');
        $this->db->where( array('is_deleted'=>0));  
        $this->db->order_by('faq_id', 'DESC');              
        return $this->db->get()->result();
    }
    function get_faqs_count(){
        $this->db->from('faqs');
        $this->db->where( array('is_deleted'=>0));  
        $this->db->order_by('faq_id', 'DESC');              
        return $this->db->count_all_results();
    }

    function get_tenders(){
        $this->db->from('tenders');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));  
        $this->db->order_by('tender_id', 'DESC');              
        return $this->db->get()->result();
    }
    function get_tenders_count(){
        $this->db->from('tenders');
        $this->db->where( array('is_deleted'=>0,'is_online'=>1));  
        $this->db->order_by('tender_id', 'DESC');              
        return $this->db->count_all_results();
    }

    function get_gallery_categories_list(){
        $this->db->from('gallery_categories');
        $this->db->where( array('is_deleted'=>0,'is_active'=>1));
        return $this->db->get()->result();

    }

    function get_gallery_images(){
        $this->db->from('gallery_images');
        $this->db->where( array('is_deleted'=>0,'is_active'=>1));

        $this->db->order_by('gallery_image_id', 'RANDOM');  
        
        return $this->db->get()->result();
    }

    function get_gallery_image_categories(){
        $this->db->from('gallery_image_categories');
        $this->db->where( array('is_deleted'=>0));
        
        return $this->db->get()->result();
    }




    function get_home_resourceful_information(){
        $this->db->select('*');
        $this->db->from('resourceful_information');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('resourceful_information_id', 'DESC');

        $this->db->limit(2); 

        return $this->db->get()->result();
    }

    function get_home_public_notices(){
        $this->db->select('*');
        $this->db->from('public_notices');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('public_notice_id', 'DESC');

        $this->db->limit(10); 

        return $this->db->get()->result();
    }
    function get_home_public_notices_count(){
        $this->db->select('*');
        $this->db->from('public_notices');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('public_notice_id', 'DESC');

        $this->db->limit(10); 

        return $this->db->count_all_results();
    }

    function get_home_interruption_notices(){
        $this->db->select('*');
        $this->db->from('interruption_notices');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('interruption_notice_id', 'DESC');

        $this->db->limit(10); 

        return $this->db->get()->result();
    }
    function get_home_interruption_notices_count(){
        $this->db->select('*');
        $this->db->from('interruption_notices');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('interruption_notice_id', 'DESC');

        $this->db->limit(10); 

        return $this->db->count_all_results();
    }


    function get_home_jobs(){
        $this->db->select('*');
        $this->db->from('careers');

        $this->db->where( array('is_publish'=>1, 'is_deleted'=>0));
        $this->db->order_by('job_id', 'DESC');

        $this->db->limit(10); 

        return $this->db->get()->result();
    }
    function get_home_jobs_count(){
        $this->db->select('*');
        $this->db->from('careers');

        $this->db->where( array('is_publish'=>1, 'is_deleted'=>0));
        $this->db->order_by('job_id', 'DESC');

        $this->db->limit(10); 

        return $this->db->count_all_results();
    }

    function get_home_tenders(){
        $this->db->select('*');
        $this->db->from('tenders');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('tender_id', 'DESC');

        //$this->db->limit(10); 

        return $this->db->get()->result();
    }
    function get_home_tenders_count(){
        $this->db->select('*');
        $this->db->from('tenders');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('tender_id', 'DESC');

        //$this->db->limit(10); 

        return $this->db->count_all_results();
    }

    function get_home_projects(){
        $this->db->select('*');
        $this->db->from('projects');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('project_id', 'RANDOM');

        $this->db->limit(3); 

        return $this->db->get()->result();
    }
    function get_home_projects_count(){
        $this->db->select('*');
        $this->db->from('projects');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('project_id', 'RANDOM');

        $this->db->limit(3); 

        return $this->db->count_all_results();
    }

    function get_home_latest_projects(){
        $this->db->select('*');
        $this->db->from('projects');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('project_id', 'DESC');

        $this->db->limit(6); 

        return $this->db->get()->result();
    }
    function get_home_latest_projects_count(){
        $this->db->select('*');
        $this->db->from('projects');

        $this->db->where( array('is_online'=>1, 'is_deleted'=>0));
        $this->db->order_by('project_id', 'DESC');

        $this->db->limit(6); 

        return $this->db->count_all_results();
    }

    function get_blog_list(){
        $this->db->select('blog_articles.*, system_users.first_name, system_users.last_name');
        $this->db->from('blog_articles');
        $this->db->join('system_users', 'system_users.user_id = blog_articles.user_id', 'left outer');
        $this->db->where( array('blog_articles.is_deleted'=>0,'blog_articles.is_publish'=>1));
        $this->db->order_by("article_id", "desc");
        return $this->db->get()->result();
    }

    function get_num_blog_list(){
        $this->db->select('blog_articles.*, system_users.first_name, system_users.last_name');
        $this->db->from('blog_articles');
        $this->db->join('system_users', 'system_users.user_id = blog_articles.user_id', 'left outer');
        $this->db->where( array('blog_articles.is_deleted'=>0,'blog_articles.is_publish'=>1));
        return $this->db->count_all_results();
    }

    function get_blog_categories(){
        $this->db->select('blog_categories.*');
        $this->db->from('blog_categories');   
        $this->db->join('blog_article_categories', 'blog_article_categories.blog_category_id = blog_categories.blog_category_id');
        $this->db->join('blog_articles', 'blog_articles.article_id = blog_article_categories.article_id');

        $this->db->where( array('blog_categories.is_deleted'=>0, 'blog_article_categories.is_deleted'=>0, 'blog_articles.is_publish'=>1));

        $this->db->group_by('blog_categories.blog_category_id');
        return $this->db->get()->result();
    }   

    function get_num_blog_categories(){
        $this->db->select('blog_categories.*');
        $this->db->from('blog_categories');   
        $this->db->join('blog_article_categories', 'blog_article_categories.blog_category_id = blog_categories.blog_category_id');
        $this->db->join('blog_articles', 'blog_articles.article_id = blog_article_categories.article_id');

        $this->db->where( array('blog_categories.is_deleted'=>0, 'blog_article_categories.is_deleted'=>0, 'blog_articles.is_publish'=>1));

        $this->db->group_by('blog_categories.blog_category_id');
        return $this->db->count_all_results();
    }   

    function get_blog_category_articles($blog_category_ref_id){
        $this->db->select('blog_articles.*, system_users.first_name, system_users.last_name');
        $this->db->from('blog_articles');
        $this->db->join('blog_article_categories', 'blog_article_categories.article_id = blog_articles.article_id');
        $this->db->join('blog_categories', 'blog_categories.blog_category_id = blog_article_categories.blog_category_id');

        $this->db->join('system_users', 'system_users.user_id = blog_articles.user_id', 'left outer');
        $this->db->where( array('blog_articles.is_deleted'=>0,'blog_articles.is_publish'=>1,'blog_categories.blog_category_ref_id'=>$blog_category_ref_id));
        $this->db->order_by("article_id", "desc");
        return $this->db->get()->result();
    }    
    function get_num_blog_category_articles($blog_category_ref_id){
        $this->db->select('blog_articles.*, system_users.first_name, system_users.last_name');
        $this->db->from('blog_articles');
        $this->db->join('blog_article_categories', 'blog_article_categories.article_id = blog_articles.article_id');
        $this->db->join('blog_categories', 'blog_categories.blog_category_id = blog_article_categories.blog_category_id');

        $this->db->join('system_users', 'system_users.user_id = blog_articles.user_id', 'left outer');
        $this->db->where( array('blog_articles.is_deleted'=>0,'blog_articles.is_publish'=>1,'blog_categories.blog_category_ref_id'=>$blog_category_ref_id));
        $this->db->order_by("article_id", "desc");
        return $this->db->count_all_results();
    }   

    function get_blog_category($blog_category_ref_id){
        $this->db->select('*');
        $this->db->from('blog_categories');

        $this->db->where( array('blog_categories.blog_category_ref_id'=>$blog_category_ref_id));

        return $this->db->get()->result();

    } 

    function get_blog_article($article_reference_id){
        $this->db->select('blog_articles.*, system_users.first_name, system_users.last_name');
        $this->db->from('blog_articles');
        $this->db->join('system_users', 'system_users.user_id = blog_articles.user_id', 'left outer');
        $this->db->where( array('blog_articles.article_reference_id'=>$article_reference_id));
        return $this->db->get()->result();
    }

    function get_blog_article_categories($article_reference_id){
        $this->db->select('*');
        $this->db->from('blog_categories');
        $this->db->join('blog_article_categories', 'blog_article_categories.blog_category_id = blog_categories.blog_category_id');
        $this->db->join('blog_articles', 'blog_article_categories.article_id = blog_articles.article_id');

        $this->db->where( array('blog_articles.article_reference_id'=>$article_reference_id));
        return $this->db->get()->result();

    }

    function get_jobs(){
        $this->db->select('careers.*, system_users.first_name, system_users.last_name');
        $this->db->from('careers');
        $this->db->join('system_users', 'system_users.user_id = careers.user_id', 'left outer');
        $this->db->where( array('careers.is_deleted'=>0,'careers.is_publish'=>1));
        $this->db->order_by("job_id", "desc");
        return $this->db->get()->result();
    }

    function get_jobs_count(){
        $this->db->select('careers.*, system_users.first_name, system_users.last_name');
        $this->db->from('careers');
        $this->db->join('system_users', 'system_users.user_id = careers.user_id', 'left outer');
        $this->db->where( array('careers.is_deleted'=>0,'careers.is_publish'=>1));
        return $this->db->count_all_results();
    }

    function get_job($job_reference_id){
        $this->db->select('careers.*, system_users.first_name, system_users.last_name');
        $this->db->from('careers');
        $this->db->join('system_users', 'system_users.user_id = careers.user_id', 'left outer');
        $this->db->where( array('job_reference_id'=>$job_reference_id));
        return $this->db->get()->result();
    }











    function get_clients(){
        $this->db->from('clients');
        $this->db->where( array('is_deleted'=>0,'is_active'=>1));

        $this->db->order_by('client_id', 'RANDOM');  

        return $this->db->get()->result();
    }

    //SERVICE SUB-CATEGORIES

    function get_subcat_images($sub_service){
        $this->db->from('subcat_images');
        $this->db->where( array('sub_service'=>$sub_service, 'is_deleted'=>0,'is_active'=>1));
        $this->db->order_by('client_id', 'RANDOM');  

        return $this->db->get()->result();

    }
    function get_subcat_narration($sub_service){
        $this->db->from('subcat_narrations');
        $this->db->where( array('sub_service'=>$sub_service, 'is_deleted'=>0,'is_active'=>1));

        return $this->db->get()->result();

    }


    //CONTACT FEEDBACK
    function submit_contact(){

        $contact_name = $this->input->post('contact_name');
        $contact_phone = $this->input->post('contact_phone');
        $contact_email = $this->input->post('contact_email');
        $contact_message = $this->input->post('contact_message');

        $mail             = new PHPMailer();
        $mail->IsSMTP();
        $mail->SMTPSecure = 'ssl';
        /*$mail->SMTPDebug  = 1; */
        $mail->SMTPAuth   = true;
        $mail->Host       = "tig.boxsecured.com";
        $mail->Port       = 465;
        $mail->Username   = "contact@kitwasco.co.ke";
        $mail->Password   = "@mN7KNC10";

        $mail->SetFrom('contact@kitwasco.co.ke', 'KITWASCO');
        $email_to = 'nyorojnr@gmail.com'; 
                 
        $mail->Subject = 'Contact Form Feedback Message';

        $email_message = "<b>Full Name: </b> " . $contact_name . "<br /><br />"; 
        $email_message .= "<b>Phone Number: </b> " . $contact_phone . "<br /><br />"; 
        $email_message .= "<b>Email Address:</b> " . $contact_email . "<br /><br />"; 
        
        $email_message .= "<b>Message:</b><br />"; 
        $email_message .= $contact_message . "<br /><br />";

        $message = file_get_contents(base_url().'email_temp/emheader');
        $message .= file_get_contents(base_url().'email_temp/embody');
        $message .= file_get_contents(base_url().'email_temp/emfooter');
        $logo = base_url().'assets/fe/images/kitwasco_logo.png';
                    
        $replacements = array(
            '({logo})' => $logo, 
            '({message_subject})' => 'Contact Form Feedback Message', 
            '({message_body})' => nl2br( stripslashes( $email_message ) )
        );
        $message = preg_replace( array_keys( $replacements ), array_values( $replacements ), $message );
                
        $plaintext = $message;
        $plaintext = strip_tags( stripslashes( $plaintext ), '<p><br><h2><h3><h1><h4>' );
        $plaintext = str_replace( array( '<p>', '<br />', '<br>', '<h1>', '<h2>', '<h3>', '<h4>' ), PHP_EOL, $plaintext );
        $plaintext = str_replace( array( '</p>', '</h1>', '</h2>', '</h3>', '</h4>' ), '', $plaintext );
        $plaintext = html_entity_decode( stripslashes( $plaintext ) );
                
                    
        $mail->MsgHTML( stripslashes( $message ) ); 
                    
        $mail->AltBody = $plaintext;
        $mail->AddAddress($email_to, "");
                
        if( !$mail->Send() ){
            $arr_return = array('res' => FALSE,'dt' => 'Message could not be sent. ' . $mail->ErrorInfo);
            return $arr_return;
        }
        else{
            $arr_return = array('res' => TRUE,'dt' => 'Your message was sent successfully.');
            return $arr_return;
        }
    }


    function submit_quote_request(){
        $full_name = $this->input->post('full_name');
        $phone_number = $this->input->post('phone_number');
        $email_address = $this->input->post('email_address');
        //$contact_subject = $this->input->post('contact_subject');        
        $service_description = $this->input->post('service_description');

        $mail             = new PHPMailer();
        $mail->IsSMTP();
        $mail->SMTPSecure = 'ssl';
        /*$mail->SMTPDebug  = 1; */
        $mail->SMTPAuth   = true;
        $mail->Host       = "mail.kitwasco.co.ke";
        $mail->Port       = 465;
        $mail->Username   = "contact@kitwasco.co.ke";
        $mail->Password   = "@mN7KNC10";

        $mail->SetFrom('contact@kitwasco.co.ke', 'KITWASCO');
        $email_to = 'nyorojnr@gmail.com'; 
                 
        $mail->Subject = 'Quote Request';

        $email_message = "<b>Full Name: </b> " . $full_name . "<br /><br />"; 
        $email_message .= "<b>Phone Number: </b> " . $phone_number . "<br /><br />"; 
        $email_message .= "<b>Email Address:</b> " . $email_address . "<br /><br />"; 
        $email_message .= "<b>Service(s):</b> <br />"; 

        $service = $this->input->post('service');     
        foreach ($service as $temp_id){
            $email_message .= " - " . $temp_id . "<br />";
        }
        
        $email_message .= "<br /><b>Service Description:</b><br />"; 
        $email_message .= $service_description . "<br /><br />";

        $message = file_get_contents(base_url().'email_temp/emheader');
        $message .= file_get_contents(base_url().'email_temp/embody');
        $message .= file_get_contents(base_url().'email_temp/emfooter');
        $logo = base_url().'assets/fe/images/logo-small.png';
                    
        $replacements = array(
            '({logo})' => $logo, 
            '({message_subject})' => 'Quote Request', 
            '({message_body})' => nl2br( stripslashes( $email_message ) )
        );
        $message = preg_replace( array_keys( $replacements ), array_values( $replacements ), $message );
                
        $plaintext = $message;
        $plaintext = strip_tags( stripslashes( $plaintext ), '<p><br><h2><h3><h1><h4>' );
        $plaintext = str_replace( array( '<p>', '<br />', '<br>', '<h1>', '<h2>', '<h3>', '<h4>' ), PHP_EOL, $plaintext );
        $plaintext = str_replace( array( '</p>', '</h1>', '</h2>', '</h3>', '</h4>' ), '', $plaintext );
        $plaintext = html_entity_decode( stripslashes( $plaintext ) );
                
                    
        $mail->MsgHTML( stripslashes( $message ) ); 
                    
        $mail->AltBody = $plaintext;
        $mail->AddAddress($email_to, "");
                
        if( !$mail->Send() ){
            $arr_return = array('res' => FALSE,'dt' => 'Quote Request could not be sent. ' . $mail->ErrorInfo);
            return $arr_return;
        }
        else{
            $arr_return = array('res' => TRUE,'dt' => 'Your Quote Request was sent successfully.');
            return $arr_return;
        }

    }


}