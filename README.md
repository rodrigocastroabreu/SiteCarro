# Carros & Cia - Consultoria Automotiva Premium

Site profissional com tema **Dark/Neon/3D** para consultoria de venda de carros. Design moderno, interativo e totalmente responsivo.

## 🚀 Características Premium

- ✨ **Tema Dark/Neon/3D** - Cores vibrantes com efeitos neon e sombras 3D
- 🎨 **Design Profissional** - Interface moderna e intuitiva
- 📱 **100% Responsivo** - Mobile-first, funciona em todos os dispositivos
- ⚡ **Performance Otimizada** - CSS variables, lazy loading, otimização de imagens
- 🎯 **Interativo** - Efeitos 3D, parallax, animações suaves
- ♿ **Acessível** - WCAG 2.1 AA, semântica HTML5, ARIA labels
- 🔍 **SEO Ready** - Meta tags, schema.org, sitemap ready
- 📡 **JavaScript Dinâmico** - Formulário validado, menu responsivo, scroll animado

## 🛠️ Tecnologias

- **HTML5** - Markup semântico moderno
- **CSS3** - Grid, Flexbox, Variáveis, Animações 3D
- **Vanilla JavaScript** - Zero dependências, performance máxima
- **Google Fonts** - Space Mono, Syne

## 📁 Estrutura do Projeto

```
SiteCarro/
│
├── index.html                  # Página principal
├── README.md                   # Documentação
├── .gitignore                  # Git ignore
│
├── assets/
│   ├── css/
│   │   ├── reset.css          # CSS Reset universal
│   │   ├── variables.css      # Tema e variáveis
│   │   ├── animations.css     # Animações e efeitos
│   │   ├── estilo.css         # Estilos principais
│   │   └── responsive.css     # Media queries
│   │
│   ├── js/
│   │   ├── main.js            # Funcionalidades principais
│   │   ├── interactions.js    # Validação e interações
│   │   └── animations.js      # Efeitos avançados
│   │
│   ├── banner.jpg             # Banner principal
│   ├── carro-assinatura.jpg   # Imagem carro assinado
│   └── consultores.jpg        # Foto do time
│
└── .git/                       # Repositório Git
```

## 🎨 Tema Dark/Neon

### Cores Principais
- **Neon Verde**: `#00ff88` - Cor primária com glow
- **Rosa Neon**: `#ff0055` - Cor secundária
- **Ciano Neon**: `#00d4ff` - Cor de acento
- **Fundo Escuro**: `#0a0e27` - Background profundo

### Efeitos 3D
- Transform 3D em cards e imagens
- Parallax ao mover mouse
- Efeito float em elementos
- Rotação e escala em hover

## 🚀 Como Usar

### 1. Clonar o Repositório
```bash
git clone https://github.com/rodrigocastroabreu/SiteCarro.git
cd SiteCarro
```

### 2. Abrir no Navegador
- Navegue até a pasta do projeto
- Abra `index.html` no navegador

### 3. Usar Servidor Local
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npm install -g http-server
http-server
```

Acesse em `http://localhost:8000`

## 📱 Responsividade

O site é 100% responsivo:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: até 480px

## ✨ Seções do Site

### 1. **Navegação**
- Navbar sticky com logo neon
- Menu responsivo com hamburger
- Links ativos ao scroll
- Smooth scroll animado

### 2. **Hero Section**
- Título com efeito neon
- Botões CTA interativos
- Imagem 3D com parallax
- Scroll indicator animado

### 3. **Sobre**
- Apresentação da empresa
- Estatísticas com contadores
- Imagem com efeito glow
- Grid responsivo

### 4. **Serviços**
- 6 cards de serviços
- Efeito 3D no hover
- Animações staggered
- Links com setas

### 5. **Consultores**
- Foto do time
- Descrição profissional
- CTA botão

### 6. **Contato**
- Mapa integrado (Google Maps)
- Formulário validado
- Informações de contato
- Redes sociais

### 7. **Footer**
- Links rápidos
- Contato direto
- Informações da empresa
- Créditos

## 🎯 Funcionalidades JavaScript

### Main.js
- ✅ Menu toggle responsivo
- ✅ Smooth scroll com offset
- ✅ Navbar ativa ao scroll
- ✅ Lazy loading de imagens

### Interactions.js
- ✅ Validação de formulário
- ✅ Mensagens de sucesso
- ✅ Contadores de estatísticas
- ✅ Efeitos parallax
- ✅ Animações de focus em inputs

### Animations.js
- ✅ Efeito 3D no mouse move
- ✅ 3D hover em cards
- ✅ Animações de texto
- ✅ Cursor com glow (opcional)
- ✅ Performance optimization

## 🔧 Customização

### Alterar Cores Neon
Edite `assets/css/variables.css`:
```css
:root {
    --color-primary: #00ff88;    /* Verde neon */
    --color-secondary: #ff0055;  /* Rosa neon */
    --color-accent: #00d4ff;     /* Ciano neon */
}
```

### Ajustar Velocidade de Animações
```css
--transition-fast: 0.2s;
--transition-normal: 0.3s;
--transition-slow: 0.5s;
```

### Modificar Espaçamento
```css
--spacing-md: 1rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
```

## 📈 Performance

- **Lazy loading** de imagens
- **CSS variables** para menor tamanho
- **Sem dependências** JavaScript
- **Minificação ready**
- **Font loading otimizado**
- **RequestAnimationFrame** para smooth animations

## 📧 Contato

- **Email**: consultores@email.com
- **Telefone**: +55 (21) 99999-9999
- **Localização**: Av. Ayrton Senna, 3000 - Barra da Tijuca, RJ

## 📄 Licença

Projeto livre para uso pessoal e comercial.

## 👨‍💻 Autor

**Rodrigo Abreu**
- [GitHub](https://github.com/rodrigocastroabreu)
- [LinkedIn](https://linkedin.com)

---

**Desenvolvido com ❤️ e muita criatividade neon!**
