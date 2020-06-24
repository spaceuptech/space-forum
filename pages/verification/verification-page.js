import Head from 'next/head'
import style from '../style.module.css'
import Link from 'next/link'

export default function Verify() {
  return (
    <div className="container">
      <Head>
        <title>Verification</title>
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
      </Head>

      <center>
        <main className={style.verifyLayout}>
          <div className={style.verifyContainer}>
            <img src="/verify-graphics.svg" width="175" />
            <div className={style.verifyTitle}>Verification</div>
            <div className={style.verifyDesc}>We have sent you a verification code on your email at sh********************</div>
            <div className={style.verifyInput}>
              <div class="form-group">
                <input class="form-input" type="text" placeholder="Enter 6 digit verification code" />
              </div>
            </div>
            <button className={style.verifyBtn}>
              Verify
              </button>
            <div className={style.verifyFooter}>Resend verification code</div>
          </div>
        </main>
      </center>
    </div >
  )
}
