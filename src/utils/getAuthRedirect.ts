import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useSupabase } from "use-supabase";

export default function useAuthRedirect<GetServerSideProps>(context:GetServerSidePropsContext){
    
    const {auth} = useSupabase();
    const user = auth.user();
    const access_token = localStorage.getItem("ACCESS_TOKEN");
    

}