import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = "ブライアン • Brian"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const bannerImageData = await fetch(
    'https://cdn.discordapp.com/banners/515404778021322773/a_11d91bf79ad8463f1cf6109dad44856f.gif?size=512'
  ).then((res) => res.arrayBuffer())

  const profileImageData = await fetch(
    'https://cdn.discordapp.com/avatars/515404778021322773/59a6286257175b6ee0ab58b6bf3304fc.webp?size=512'
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #cb003f, #0c81d0)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={bannerImageData as unknown as string}
          alt="Banner"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '50%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 0 0 10px rgba(255,255,255,0.3)',
          }}
        >
          <img
            src={profileImageData as unknown as string}
            alt="Profile"
            width={200}
            height={200}
          />
        </div>
        <h1
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
            marginTop: '60%',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          Brian's Portfolio
        </h1>
        <p
          style={{
            fontSize: 30,
            color: 'white',
            marginTop: 20,
            textAlign: 'center',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          Passionate Developer & Discord Moderator
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}

