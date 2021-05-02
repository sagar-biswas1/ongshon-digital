import React from "react";

function AboutUs() {
  return (
    <>
      <div className="card text-center margin-d">
        <div className="card-header">
          Ongshon Digital একটি অনলাইন বিজনেস কোচ।
        </div>
        <div className="card-body">
          <p className="card-text">
            বর্তমানে অনলাইন ব্যবসায় বেড়েই চলছে। ঘরে বসে ফেসবুক পেজ খুলে অথবা
            একটি ওয়েবসাইট বানিয়েই অনেকেই অনলাইন ব্যবসায় করছেন অথবা করার কথা
            ভাবছেন। তারই ধারাবাহিকতায় আমরা ছোট-বড় সব ধরনের অনলাইন ব্যবসার জন্য
            কাজ করে থাকি৷ একটি অনলাইন ব্যবসার গঠন থেকে শুরু করে প্রোমোশন, প্রশার
            ও বিক্রি বৃদ্ধির জন্য যাবতীয় গাইডলাইন আমরা দিয়ে থাকি। আমাদের রয়েছে
            মার্কেটিং এ প্রোফেশনাল ডিগ্রিধারী লোকবল।
          </p>
          <div className="card-footer text-muted">
            ১.ফেসবুক পেজ/পোস্ট বুস্টিং <br></br>২.ফেসবুক পেজ ডেভেলপমেন্ট{" "}
            <br></br>৩.বিজনেজ ওয়েবসাইট তৈরী <br></br>৪.ওয়েবসাইটের SEO সার্ভিস
            <br></br> ৫. বিজনেস প্ল্যান রেডি করা
          </div>

          <a
            href="https://m.me/ongshondigital"
            target="_blank"
            className="btn btn-primary"
          >
            Message us
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
