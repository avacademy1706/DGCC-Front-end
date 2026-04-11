'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Mail, Eye, EyeOff, ChevronRight, ShieldCheck } from 'lucide-react'
import { usePost } from '@/hooks/usePost'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

interface DataLine {
  id: number
  x1: number
  y1: number
  x2: number
  y2: number
  progress: number
  speed: number
  opacity: number
}

type AdminLoginPayload = {
  email: string
  password: string
}

type AdminLoginResponse = {
  success: boolean
  message: string
  admin: {
    id: string
    email: string
  }
}

const PARTICLE_COLORS = ['#FF6F00', '#F59E0B', '#CBD5E1', '#FDBA74']
const PARTICLE_COUNT = 38
const LINE_COUNT = 12

function AnimatedLeftPanel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const animRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const linesRef = useRef<DataLine[]>([])

  const initParticles = useCallback((w: number, h: number) => {
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2.2 + 0.8,
      opacity: Math.random() * 0.45 + 0.18,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }))
  }, [])

  const initLines = useCallback((w: number, h: number) => {
    linesRef.current = Array.from({ length: LINE_COUNT }, (_, i) => ({
      id: i,
      x1: Math.random() * w * 0.7,
      y1: Math.random() * h,
      x2: Math.random() * w * 0.7 + w * 0.1,
      y2: Math.random() * h,
      progress: Math.random(),
      speed: Math.random() * 0.004 + 0.002,
      opacity: Math.random() * 0.18 + 0.06,
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      initParticles(canvas.width, canvas.height)
      initLines(canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    window.addEventListener('mousemove', onMouseMove)

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      ctx.clearRect(0, 0, w, h)

      for (let gx = 28; gx < w; gx += 28) {
        for (let gy = 28; gy < h; gy += 28) {
          const dist = Math.hypot(mx - gx, my - gy)
          const glow = Math.max(0, 1 - dist / 130)

          if (glow > 0.01) {
            ctx.fillStyle = `rgba(255,111,0,${(0.05 + glow * 0.22).toFixed(2)})`
            ctx.beginPath()
            ctx.arc(gx, gy, 1 + glow * 2.4, 0, Math.PI * 2)
            ctx.fill()
          } else {
            ctx.fillStyle = 'rgba(203,213,225,0.55)'
            ctx.beginPath()
            ctx.arc(gx, gy, 1, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      const g1 = ctx.createRadialGradient(mx, my, 0, mx, my, 150)
      g1.addColorStop(0, 'rgba(255,111,0,0.10)')
      g1.addColorStop(0.5, 'rgba(255,111,0,0.04)')
      g1.addColorStop(1, 'rgba(255,111,0,0)')
      ctx.fillStyle = g1
      ctx.beginPath()
      ctx.arc(mx, my, 150, 0, Math.PI * 2)
      ctx.fill()

      const g2 = ctx.createRadialGradient(mx, my, 0, mx, my, 80)
      g2.addColorStop(0, 'rgba(245,158,11,0.09)')
      g2.addColorStop(1, 'rgba(245,158,11,0)')
      ctx.fillStyle = g2
      ctx.beginPath()
      ctx.arc(mx, my, 80, 0, Math.PI * 2)
      ctx.fill()

      linesRef.current.forEach((line) => {
        line.progress += line.speed
        if (line.progress > 1.2) {
          line.progress = -0.2
          line.x1 = Math.random() * w * 0.7
          line.y1 = Math.random() * h
          line.x2 = line.x1 + (Math.random() - 0.5) * 200
          line.y2 = line.y1 + (Math.random() - 0.5) * 140
        }

        const t = Math.max(0, Math.min(1, line.progress))
        const dotX = line.x1 + (line.x2 - line.x1) * t
        const dotY = line.y1 + (line.y2 - line.y1) * t

        ctx.strokeStyle = `rgba(255,111,0,${line.opacity})`
        ctx.lineWidth = 0.6
        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
        ctx.stroke()

        ctx.fillStyle = `rgba(255,111,0,${line.opacity * 4.5})`
        ctx.beginPath()
        ctx.arc(dotX, dotY, 1.8, 0, Math.PI * 2)
        ctx.fill()
      })

      particlesRef.current.forEach((p) => {
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.hypot(dx, dy)

        if (dist < 130 && dist > 0) {
          const force = ((130 - dist) / 130) * 0.016
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.98
        p.vy *= 0.98

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        particlesRef.current.forEach((q) => {
          if (q.id <= p.id) return
          const d = Math.hypot(p.x - q.x, p.y - q.y)

          if (d < 90) {
            ctx.strokeStyle = `rgba(255,111,0,${((1 - d / 90) * 0.14).toFixed(2)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        })

        const hex = Math.round(p.opacity * 255)
          .toString(16)
          .padStart(2, '0')
        ctx.fillStyle = p.color + hex
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [initParticles, initLines])

  return (
    <div className="relative flex-1 overflow-hidden min-h-[600px]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
        style={{
          background:
            'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 45%, #FFE4D6 100%)',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.95),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,111,0,0.08),transparent_30%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-11 py-9 text-center">
        <div className="mb-8 flex items-center gap-3">
          <div
            className="flex items-center gap-2.5 rounded-[10px] px-4 py-2.5"
            style={{
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(255,111,0,0.16)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <ShieldCheck size={18} color="#FF6F00" />
            <span
              className="text-[18px] font-bold tracking-[-0.01em]"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", color: '#0F172A' }}
            >
              Plexus <span style={{ color: '#FF6F00' }}>Admin</span>
            </span>
          </div>

          <div
            className="flex items-center gap-1.5 rounded-full px-3 py-[5px]"
            style={{
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.18)',
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ background: '#10B981', boxShadow: '0 0 6px rgba(16,185,129,0.35)' }}
            />
            <span
              className="text-[11px] font-medium uppercase tracking-[0.07em]"
              style={{ color: '#059669', fontFamily: "'JetBrains Mono', monospace" }}
            >
              Secure
            </span>
          </div>
        </div>

        <p
          className="mb-4 text-[11.5px] font-medium uppercase tracking-[0.12em]"
          style={{ color: '#FF6F00', fontFamily: "'JetBrains Mono', monospace" }}
        >
          Admin Access Portal
        </p>

        <h1
          className="mb-4 max-w-[400px] text-[40px] font-bold leading-[1.15]"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", color: '#0F172A' }}
        >
          Secure Admin
          <br />
          <span
            style={{
              backgroundImage: 'linear-gradient(90deg, #FF6F00 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Control Panel
          </span>
        </h1>

        <p className="max-w-[320px] text-[14px] leading-[1.7]" style={{ color: '#64748B' }}>
          Login to manage platform settings, protected data, admin operations,
          and internal dashboard controls.
        </p>
      </div>
    </div>
  )
}

export default function AdminLoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const loginMutation = usePost('/admin-auth/login')

  const loading = loginMutation.isPending

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Email is required.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (!password.trim()) {
      setError('Password is required.')
      return
    }

    loginMutation.mutate(
      {
        email: email.trim().toLowerCase(),
        password,
      },
      {
        onSuccess: (data: AdminLoginResponse) => {
          if (!data?.success) {
            setError(data?.message || 'Login failed')
            return
          }

          localStorage.setItem('admin_user', JSON.stringify(data.admin))
          setSuccess(true)

          setTimeout(() => {
            router.push('/dashboard')
          }, 1200)
        },
        onError: (err: any) => {
          setError(
            err?.response?.data?.message ||
              err?.message ||
              'Invalid email or password. Please try again.'
          )
        },
      }
    )
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap');
        @keyframes errSlide  { from{opacity:0;transform:translateY(-5px)} to{opacity:1;transform:translateY(0)} }
        @keyframes successIn { from{opacity:0;transform:scale(.94)} to{opacity:1;transform:scale(1)} }
        @keyframes ringPulse { 0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,.18)} 50%{box-shadow:0 0 0 14px rgba(16,185,129,0)} }
        @keyframes dotBounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
        @keyframes spinBtn   { to{transform:rotate(360deg)} }
        .anim-err     { animation:errSlide .22s ease }
        .anim-success { animation:successIn .4s ease }
        .anim-ring    { animation:ringPulse 1.6s ease-in-out infinite }
        .anim-spin    { animation:spinBtn .65s linear infinite }
      `}</style>

      <div
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 px-5 py-8"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        <div
          className="flex w-full overflow-hidden rounded-[22px]"
          style={{
            maxWidth: 960,
            minHeight: 600,
            border: '1px solid #E2E8F0',
            boxShadow: '0 24px 80px rgba(15,23,42,0.10)',
            background: '#FFFFFF',
          }}
        >
          <div className="relative hidden flex-1 md:flex">
            <AnimatedLeftPanel />
          </div>

          <div
            className="relative flex w-full flex-col justify-center overflow-hidden px-10 py-12 md:w-[400px] md:flex-none"
            style={{ background: '#FFFFFF', borderLeft: '1px solid #E2E8F0' }}
          >
            <div
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, #FF6F00 35%, #F59E0B 65%, transparent 100%)',
              }}
            />

            {success ? (
              <div className="anim-success flex flex-col items-center justify-center py-9 text-center">
                <div
                  className="anim-ring mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-full"
                  style={{
                    background: '#ECFDF5',
                    border: '1px solid #A7F3D0',
                  }}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <p
                  className="mb-2 text-[19px] font-bold"
                  style={{ fontFamily: "'Space Grotesk', system-ui", color: '#059669' }}
                >
                  Login Successful
                </p>

                <p className="mb-5 text-[13px]" style={{ color: '#64748B' }}>
                  Redirecting to admin dashboard...
                </p>

                <div className="flex items-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-[7px] w-[7px] rounded-full"
                      style={{
                        background: '#FF6F00',
                        animation: `dotBounce 1.2s ease-in-out ${i * 0.18}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div
                  className="mb-6 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-[5px]"
                  style={{
                    background: '#FFF7ED',
                    border: '1px solid #FED7AA',
                  }}
                >
                  <span className="h-[5px] w-[5px] rounded-full" style={{ background: '#FF6F00' }} />
                  <span
                    className="text-[11px] font-medium uppercase tracking-[0.07em]"
                    style={{ color: '#FF6F00', fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Admin Portal
                  </span>
                </div>

                <p
                  className="mb-2 text-[23px] font-bold"
                  style={{ fontFamily: "'Space Grotesk', system-ui", color: '#0F172A' }}
                >
                  Admin Login
                </p>

                <p className="mb-7 text-[13px] leading-6" style={{ color: '#64748B' }}>
                  Enter your admin email and password to continue.
                </p>

                {error && (
                  <div
                    className="anim-err mb-[18px] flex items-start gap-2 rounded-[10px] px-[13px] py-[10px] text-[12.5px] leading-[1.45]"
                    style={{
                      background: '#FEF2F2',
                      border: '1px solid #FECACA',
                      color: '#DC2626',
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-px shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {error}
                  </div>
                )}

                <div className="mb-[15px]">
                  <label
                    htmlFor="admin-email"
                    className="mb-[7px] block text-[12px] font-medium tracking-[0.02em]"
                    style={{ color: '#475569' }}
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <span
                      className="pointer-events-none absolute left-[13px] top-1/2 flex -translate-y-1/2"
                      style={{ color: '#94A3B8' }}
                    >
                      <Mail size={14} />
                    </span>

                    <input
                      id="admin-email"
                      type="email"
                      placeholder="admin@plexus.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setError('')
                      }}
                      disabled={loading}
                      autoComplete="email"
                      autoFocus
                      className="w-full rounded-[11px] py-[11px] pl-[38px] pr-[13px] text-[13.5px] outline-none transition-all duration-150"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        color: '#0F172A',
                        caretColor: '#FF6F00',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FDBA74'
                        e.target.style.boxShadow = '0 0 0 4px rgba(255,111,0,0.10)'
                        e.target.style.background = '#FFFFFF'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#E2E8F0'
                        e.target.style.boxShadow = 'none'
                        e.target.style.background = '#FFFFFF'
                      }}
                    />
                  </div>
                </div>

                <div className="mb-[22px]">
                  <label
                    htmlFor="admin-password"
                    className="mb-[7px] block text-[12px] font-medium tracking-[0.02em]"
                    style={{ color: '#475569' }}
                  >
                    Password
                  </label>

                  <div className="relative">
                    <span
                      className="pointer-events-none absolute left-[13px] top-1/2 flex -translate-y-1/2"
                      style={{ color: '#94A3B8' }}
                    >
                      <Lock size={14} />
                    </span>

                    <input
                      id="admin-password"
                      type={showPw ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setError('')
                      }}
                      disabled={loading}
                      autoComplete="current-password"
                      className="w-full rounded-[11px] py-[11px] pl-[38px] pr-10 text-[13.5px] outline-none transition-all duration-150"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        color: '#0F172A',
                        caretColor: '#FF6F00',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FDBA74'
                        e.target.style.boxShadow = '0 0 0 4px rgba(255,111,0,0.10)'
                        e.target.style.background = '#FFFFFF'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#E2E8F0'
                        e.target.style.boxShadow = 'none'
                        e.target.style.background = '#FFFFFF'
                      }}
                    />

                    <button
                      type="button"
                      tabIndex={-1}
                      aria-label={showPw ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPw((v) => !v)}
                      className="absolute right-[10px] top-1/2 flex -translate-y-1/2 rounded-[6px] p-1 transition-colors duration-150"
                      style={{
                        color: '#94A3B8',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#0F172A'
                        e.currentTarget.style.background = '#F8FAFC'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#94A3B8'
                        e.currentTarget.style.background = 'none'
                      }}
                    >
                      {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[11px] py-3 text-[14px] font-semibold tracking-[0.01em] transition-all duration-150 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-[0.62]"
                  style={{
                    background: '#FF6F00',
                    color: '#FFFFFF',
                    border: 'none',
                    boxShadow: '0 12px 28px rgba(255,111,0,0.24)',
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.background = '#EA580C'
                      e.currentTarget.style.boxShadow = '0 16px 32px rgba(255,111,0,0.28)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FF6F00'
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(255,111,0,0.24)'
                  }}
                >
                  {loading ? (
                    <>
                      <div
                        className="anim-spin h-4 w-4 rounded-full"
                        style={{
                          border: '2.2px solid rgba(255,255,255,0.35)',
                          borderTopColor: '#FFFFFF',
                        }}
                      />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In <ChevronRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}